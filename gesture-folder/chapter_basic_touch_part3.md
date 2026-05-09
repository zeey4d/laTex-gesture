# الفصل: اللمس الأساسي — gesture-kit-basic-touch
## الجزء الثالث: المعمارية، التحديات، أفضل الممارسات، الخلاصة

---

## 5. معمارية الكود في Gesture Kit

### 5.1 تصميم الـ Hooks

كل Hook في `gesture-kit-basic-touch` يتبع نمطاً موحداً:

```
useXxx(options) → GestureObject
```

حيث `GestureObject` هو كائن إيماءة من `react-native-gesture-handler` يمكن تمريره مباشرةً إلى `<GestureDetector gesture={...}>`. هذا يمنح المطور حرية تامة في بناء واجهة المستخدم كيفما شاء.

```typescript
// البنية الداخلية الموحدة لكل Hook
export function useXxx(options: UseXxxOptions) {
  const { onXxx, threshold, enabled = true } = options;

  // useMemo لضمان عدم إعادة بناء كائن الإيماءة
  // إلا عند تغيير أحد الاعتماديات
  return useMemo(() => {
    let g = Gesture.Xxx();          // 1. إنشاء المُعرِّف الأساسي
    // 2. تطبيق الإعدادات الاختيارية
    if (threshold !== undefined) g = g.someThreshold(threshold);
    // 3. ربط دالة الاستجابة
    g = g.onEnd((e) => {
      const event: XxxEvent = { x: e.x, y: e.y, ... };
      onXxx(event);
    });
    // 4. تفعيل/تعطيل الإيماءة
    return g.enabled(enabled);
  }, [onXxx, threshold, enabled]);  // 5. تحديد الاعتماديات بدقة
}
```

**لماذا `useMemo`؟** كائنات الإيماءة في RNGH لها هوية مرجعية (Reference Identity). إذا أُعيد إنشاؤها في كل تصيير (render)، سيُعيد `GestureDetector` تسجيل المُعرِّفات باستمرار، مما يُسبب مشاكل في الأداء وفقدان الحالة. `useMemo` يضمن استقرار الكائن.

### 5.2 تجريد المكونات (Component Abstraction)

كل مكوّن في `components/` هو غلاف (Wrapper) يجمع ثلاثة عناصر:

```tsx
export const XxxGesture: React.FC<XxxProps> = ({ children, onXxx, ...config }) => {
  // 1. بناء كائن الإيماءة داخلياً
  const gesture = useMemo(() => {
    return Gesture.Xxx()
      .onEnd((e) => onXxx({ x: e.x, y: e.y, ... }))
      .enabled(config.enabled ?? true);
  }, [onXxx, ...Object.values(config)]);

  // 2. تغليف الأطفال بـ GestureDetector
  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

// 3. اسم للعرض في أدوات التطوير
XxxGesture.displayName = 'XxxGesture';
```

### 5.3 نظام الأنواع (Type System)

تُعرِّف `types.ts` ثلاث طبقات من الأنواع:

```typescript
// الطبقة 1: الأحداث الأساسية المشتركة
interface BaseGestureEvent {
  x: number;          // نسبية للعنصر
  y: number;
  absoluteX: number;  // مطلقة للشاشة
  absoluteY: number;
}

// الطبقة 2: أحداث متخصصة تمتد من الأساسية
interface TapEvent extends BaseGestureEvent { numberOfTaps: number; }
interface LongPressEvent extends BaseGestureEvent { duration: number; }
interface PressForceEvent extends BaseGestureEvent { force: number; }

// الطبقة 3: خيارات الـ Hooks والمكونات
interface UseTapOptions {
  onTap: (event: TapEvent) => void;
  numberOfTaps?: number;
  maxDuration?: number;
  maxDistance?: number;
  enabled?: boolean;
}
```

### 5.4 نظام التصدير (Export System)

```typescript
// index.ts — نقطة الدخول الوحيدة للمكتبة
export * from './types';         // جميع الأنواع

// المكونات
export { TapGesture } from './components/TapGesture';
export { DoubleTapGesture } from './components/DoubleTapGesture';
// ...

// الـ Hooks
export * from './hooks';
```

يُتيح هذا للمطور استيراد ما يحتاجه فقط:

```tsx
import { TapGesture, useLongPress } from 'gesture-kit-basic-touch';
```

---

## 6. التحديات والقيود

### 6.1 دقة التعرف

**مشكلة تمييز Single Tap عن Double Tap:**
يواجه النظام تعارضاً فطرياً: لاستيعاب احتمال مجيء ضغطة ثانية، يجب تأخير تنفيذ حدث Single Tap بمقدار `maxDelay`. هذا يجعل التطبيقات التي تتعامل مع كلا الإيماءتين معاً تُعاني من تأخر ملحوظ (300ms) في استجابة الضغطة الواحدة.

**الحل المُوصى:**
```tsx
// لا تجمع Single Tap وDouble Tap على العنصر ذاته ما لم يكن ضرورياً
// إذا اضطُررت، استخدم Gesture.Exclusive() بترتيب صحيح
const gesture = Gesture.Exclusive(doubleTap, singleTap);
```

### 6.2 الأداء

كائنات الإيماءة تعمل على UI Thread في RNGH، لكن دوال الاستجابة (`onTap`, `onLongPress`) تُنفَّذ على JS Thread. يُسبب هذا **تأخر الجسر** إذا كانت هذه الدوال تُنفذ عمليات ثقيلة كتحديث حالة كبيرة أو حوسبة معقدة.

**التوصية:**
```tsx
// ✅ أسرع: تحديث بسيط للحالة
onTap={() => setSelected(true)}

// ⚠️ أبطأ: عمليات ثقيلة على JS Thread
onTap={() => processLargeDataset()}
```

للحركات التي تتطلب أداءً عالياً، يُفضَّل استخدام `runOnJS()` مع `react-native-reanimated`.

### 6.3 تعارض الإيماءات

في الشاشات المعقدة التي تحتوي على `ScrollView` وإيماءات لمس في آنٍ واحد، قد تتنافس إيماءتا السحب والضغط على التحكم. الحل هو الإعداد الصحيح لعلاقات الانتظار والتزامن:

```tsx
const scrollGesture = Gesture.Native();
const tapGesture = useTap({ onTap: handleTap });

// يجب أن ينتظر Tap نجاح/فشل السحب
const composedGesture = Gesture.Simultaneous(scrollGesture, tapGesture);
```

### 6.4 دعم Force Touch

`Gesture.ForceTouch()` يعمل فقط على الأجهزة الداعمة. على الأجهزة غير الداعمة، يُرجع RNGH قيمة `force: 0` دائماً وقد لا تُطلق الإيماءة أبداً. يجب التحقق من دعم الجهاز قبل الاعتماد على `usePressForce`.

---

## 7. أفضل الممارسات

### 7.1 اختيار Hook أم Component؟

```tsx
// ✅ استخدم المكوّن عندما تحتاج غلافاً مرئياً واضحاً
<TapGesture onTap={handleTap}>
  <Button title="اضغط هنا" />
</TapGesture>

// ✅ استخدم الـ Hook عندما تحتاج دمج إيماءتين أو أكثر
const tap = useTap({ onTap: handleTap });
const longPress = useLongPress({ onLongPress: handleHold });
const gesture = Gesture.Exclusive(longPress, tap);
return <GestureDetector gesture={gesture}><View /></GestureDetector>;
```

### 7.2 الاستقرار المرجعي للدوال

```tsx
// ❌ تجنب تمرير دوال مجهولة مباشرة — تُعيد بناء الإيماءة في كل render
<TapGesture onTap={() => console.log('tap')}>...</TapGesture>

// ✅ استخدم useCallback لضمان استقرار المرجع
const handleTap = useCallback((e) => console.log('tap', e.x), []);
<TapGesture onTap={handleTap}>...</TapGesture>
```

### 7.3 اعتبارات تجربة المستخدم (UX)

- **التغذية الراجعة الفورية:** استخدم `onPressIn` في Long Press لتغيير مظهر العنصر فور اللمس، لا انتظار اكتمال المدة.
- **حدود معقولة:** لا تضع `minDuration` للضغط المطوّل أكثر من 800ms؛ المستخدمون لا يتوقعون الانتظار أكثر من ذلك.
- **توضيح الإيماءة للمستخدم:** الإيماءات غير المألوفة (كـ Triple Tap) يجب إرشاد المستخدم إليها بمؤشر بصري.
- **عدم التعارض:** لا تُعيّن Double Tap وSingle Tap على العنصر ذاته إلا إذا كانت الاستجابتان مختلفتين بوضوح تام.

---

## 8. الخلاصة

**النقاط الرئيسية لهذا الفصل:**

1. **اللمس الأساسي** هو الفئة الأبسط والأكثر استخداماً في إيماءات الأجهزة المحمولة، وتشمل تسعة أنواع متمايزة من الضغطة الواحدة إلى الضغط بالقوة.

2. **المتغيرات الجوهرية** في التعرف على هذه الإيماءات هي: الزمن، والمسافة، والتكرار، والقوة — وكل إيماءة تُحدَّد بتوليفة مختلفة من هذه المتغيرات.

3. **المعمارية في Gesture Kit** تتبع نمطاً موحداً: Hook يُعيد كائن إيماءة جاهزاً، ومكوّن يُغلف هذا الكائن مع `GestureDetector`، وملف أنواع مستقل يُعرِّف كل واجهات البيانات بدقة.

4. **الاعتماد على `react-native-gesture-handler`** يضمن تنفيذ منطق التعرف على UI Thread بدلاً من JS Thread، مما يُحقق أداءً عالياً واستجابة سلسة.

5. **أبرز التحديات** تتمثل في إدارة تعارض الإيماءات عند الجمع بين Single Tap وDouble Tap، وضمان الاستقرار المرجعي للدوال لتجنب إعادة البناء غير الضرورية.

6. **أفضل الممارسات** تتمحور حول: اختيار Hook أو Component حسب السياق، استخدام `useCallback` لاستقرار الاعتماديات، وتزويد المستخدم بتغذية راجعة فورية عبر `onPressIn`.
