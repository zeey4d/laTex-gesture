# الفصل: الإيماءات الحسّية — gesture-kit-sensor
## الجزء الأول

---

## 1. المقدمة العامة للفئة

### 1.1 تعريف الإيماءات الحسّية

تُعرَّف الإيماءات الحسّية (Sensor-Based Gestures) بأنها تلك الأنماط من التفاعل بين المستخدم والجهاز التي لا تعتمد على لمس الشاشة، بل تعتمد على تفسير البيانات الخام المُستقاة من المستشعرات الفيزيائية المدمجة في الأجهزة الذكية. تقوم هذه الفئة على قراءة حركة الجهاز في الفراغ الثلاثي الأبعاد، وتحويل تلك القراءات إلى أحداث تفاعلية ذات معنى يستطيع التطبيق الاستجابة لها.

في سياق مكتبة Gesture Kit، تُمثّل وحدة `gesture-kit-sensor` نظاماً متكاملاً لالتقاط بيانات مستشعر التسارع (Accelerometer) وتحويلها إلى إيماءات قابلة للاستخدام مباشرةً في تطبيقات React Native.

### 1.2 الأهمية في التطبيقات الحديثة

مع تطور منظومة الأجهزة المحمولة، باتت المستشعرات المدمجة تُشكّل بُعداً إضافياً للتفاعل البشري-الحاسوبي (HCI). تتجلى أهمية هذه الإيماءات في:

- **تجاوز قيود الشاشة:** تمنح المستخدم القدرة على التحكم في التطبيق دون أن تلتهم يداه مساحة العرض.
- **تعزيز إمكانية الوصول (Accessibility):** توفر وسيلة تفاعل بديلة للمستخدمين ذوي الإعاقات الحركية الذين يجدون صعوبة في التعامل مع اللمس الدقيق.
- **إثراء تجربة الألعاب والواقع المعزز:** تُتيح تجارب غامرة تعتمد على حركة الجهاز الفعلية في الفراغ.
- **واجهات التحكم الضمنية:** يمكن تحديد وضعية الجهاز واستخدامها لتغيير سلوك التطبيق دون أي إدخال صريح من المستخدم.

### 1.3 المقارنة مع الإيماءات اللمسية

| المعيار | الإيماءات اللمسية | الإيماءات الحسّية |
|---|---|---|
| **مصدر البيانات** | نقاط اللمس على الشاشة (x, y) | مستشعرات حركة الجهاز (x, y, z) |
| **بُعد التفاعل** | ثنائي الأبعاد | ثلاثي الأبعاد |
| **الحالة المطلوبة** | ملامسة الشاشة | حركة الجهاز في الفراغ |
| **الدقة** | عالية جداً (pixel-level) | متوسطة (تتأثر بالضوضاء) |
| **الكمون (Latency)** | منخفض جداً | متوسط (يعتمد على معدل التحديث) |
| **استهلاك البطارية** | منخفض | أعلى نسبياً (تشغيل مستمر للمستشعر) |
| **التجربة** | مباشرة وبديهية | غنية ومجسّمة |

---

## 2. الأساس النظري العام

### 2.1 التقنية المُستخدمة: مستشعر التسارع

يعتمد `gesture-kit-sensor` كلياً على **مستشعر التسارع (Accelerometer)**، وهو مكوّن إلكتروميكانيكي يقيس التسارع الخطي للجهاز عبر ثلاثة محاور متعامدة. يستخدم المستشعر الحديث تقنية الأنظمة المتكاملة الكهروميكانيكية (MEMS - Micro-Electro-Mechanical Systems)، حيث تتحرك كتلة صغيرة داخل المستشعر بتأثير التسارع، وتُقاس إزاحتها كهربائياً وتُحوَّل إلى قيم رقمية.

تُوفر مكتبة `expo-sensors` واجهة برمجية موحدة للوصول إلى هذا المستشعر على كل من منصتي iOS وAndroid، وهي البنية التحتية التي تعتمد عليها جميع الـ Hooks في هذه الوحدة.

```typescript
// البنية الأساسية لبيانات مستشعر التسارع
interface AccelerometerData {
  x: number; // التسارع على المحور الأفقي  (-1 إلى 1 في ظروف عادية)
  y: number; // التسارع على المحور الرأسي
  z: number; // التسارع على محور العمق (العمودي على الشاشة)
}
```

### 2.2 المفاهيم الأساسية

#### 2.2.1 التسارع (Acceleration)

التسارع هو معدل تغيّر السرعة بمرور الوقت. في سياق المستشعر، تُعبّر القيم عن كسور من قوة الجاذبية الأرضية (g ≈ 9.8 m/s²). في حالة الجهاز ثابتاً على سطح مستوٍ، تكون القراءات تقريباً: `x=0, y=0, z=1` حيث تُمثّل الـ `z=1` تأثير الجاذبية الأرضية.

#### 2.2.2 الاتجاه والتوجّه (Orientation)

يُشير التوجّه إلى الوضعية الزاوية للجهاز. يمكن استنتاجه من قيم مستشعر التسارع في الحالات الثابتة (Static Orientation)، إذ تُشير نسبة توزيع قوة الجاذبية على المحاور الثلاثة إلى زاوية ميل الجهاز بدقة كافية.

**محاور الجهاز:**
- **المحور X:** يمتد أفقياً من اليسار إلى اليمين. القيمة الإيجابية تعني الميل نحو اليمين.
- **المحور Y:** يمتد رأسياً من الأسفل إلى الأعلى. القيمة الإيجابية تعني الميل للأمام.
- **المحور Z:** يعمد عمودياً على الشاشة. القيمة الإيجابية تعني أن الشاشة في مواجهة الأعلى.

#### 2.2.3 السرعة (Velocity) والزمن (Time)

لا يقيس مستشعر التسارع السرعة مباشرةً. يمكن تقدير السرعة عبر تكامل التسارع مع الزمن (v = ∫a·dt). في Gesture Kit، يُستخدم مفهوم الزمن بشكل مختلف: عبر **فترة التهدئة (Cooldown)** في إيماءة الاهتزاز، وعبر **معدل التحديث (Update Interval)** الذي يحدد عدد القراءات في الثانية.

```
معدل التحديث المُستخدم في المكتبة:
- الأنيميشن السلس (60fps): 16ms
- التفاعل العام:           100ms
- الانقلاب والوجه:         150ms
```

### 2.3 آلية الالتقاط والاشتراك

تتبع جميع الـ Hooks نمطاً موحداً للاشتراك في بيانات المستشعر:

```typescript
useEffect(() => {
  // 1. تعيين معدل التحديث
  Accelerometer.setUpdateInterval(intervalMs);
  
  // 2. الاشتراك وتسجيل دالة الاستجابة
  const subscription = Accelerometer.addListener((data) => {
    // معالجة البيانات هنا
  });
  
  // 3. إلغاء الاشتراك عند تفكيك المكوّن (منع تسرب الذاكرة)
  return () => subscription.remove();
}, [dependencies]);
```

هذا النمط يضمن: التهيئة عند الاتصال، والتنظيف التلقائي عند الفصل، وإعادة التهيئة عند تغيّر الخيارات.

---

## 3. التحليل الداخلي للفئة

تنقسم إيماءات `gesture-kit-sensor` إلى ثلاثة أقسام وظيفية رئيسية بناءً على طبيعة الحركة المُكتشفة:

1. **إيماءات الحركة المفاجئة** — تعتمد على ارتفاع التسارع المطلق (الاهتزاز، التأرجح، السقوط الحر).
2. **إيماءات الإمالة والتوجّه** — تعتمد على التوزيع الثابت لقوة الجاذبية على المحاور (الإمالة، الانقلاب).
3. **إيماءات الحركة المركّبة** — تعتمد على متابعة الحركة المستمرة على محورين معاً (الحركة الدائرية، الإمالة متعددة المحاور).

---

## القسم الأول: إيماءات الحركة المفاجئة

### 3.1.1 تعريف القسم

تُمثّل إيماءات الحركة المفاجئة تلك الأنماط التي تتسم بارتفاع حاد ومؤقت في قيمة التسارع الكلي للجهاز، ثم عودته إلى مستواه الطبيعي. تختلف هذه الإيماءات عن الإمالة بأنها ذات طابع **ديناميكي وعابر** لا **ثابت ومستمر**. تشمل هذه الفئة في Gesture Kit: `ShakeGesture`، `SwingGesture`، و`FreeFallGesture`.

### 3.1.2 آلية العمل

**قياس التسارع المطلق (Magnitude):**

المبدأ المشترك بين هذه الإيماءات هو حساب المتجه المقياسي للتسارع (Scalar Magnitude) الذي يجمع تأثير المحاور الثلاثة في قيمة واحدة:

```
|a| = √(x² + y² + z²)
```

هذه الصيغة مستقلة عن اتجاه الحركة، مما يجعل اكتشاف الاهتزاز مثلاً صحيحاً بصرف النظر عن وضعية الجهاز.

**المنطق التفريقي بين الإيماءات:**

| الإيماءة | شرط الاكتشاف | الحالة الطبيعية |
|---|---|---|
| `ShakeGesture` | `|a| > 2.2` (ارتفاع عالٍ) | حول 1.0 (الجاذبية فقط) |
| `SwingGesture` | `|x| > 1.2` (تسارع أفقي محدد) | حول 0 |
| `FreeFallGesture` | `|a| < 0.5` (انخفاض حاد تحت الجاذبية) | حول 1.0 |

### 3.1.3 منطق الاكتشاف

**للاهتزاز (Shake):** عند تجاوز قيمة التسارع الكلي حد الـ `threshold` (افتراضياً 2.2)، يُطلق النظام الإيماءة. غير أن فترة التهدئة `cooldown` (افتراضياً 800ms) تمنع الاكتشافات المتكررة خلال اهتزازة واحدة مستمرة.

**للتأرجح (Swing):** يُركز على المحور الأفقي `x` حصراً، وعند تجاوز عتبة `1.2` تُطلق الإيماءة. لكن على عكس Shake، لا يوجد cooldown مُطبَّق، مما يعني أن `onSwing` تُستدعى بشكل متكرر ما دام الجهاز في وضع التأرجح.

**للسقوط الحر (Free Fall):** يُعدّ الأكثر تميزاً؛ إذ يبحث عن **انخفاض** قيمة التسارع لا ارتفاعها. عند السقوط الحر، تتلاشى قوة الجاذبية الظاهرية على المستشعر، فتقترب القراءات من الصفر.

### 3.1.4 الإيماءات بالتفصيل

#### أ. إيماءة الاهتزاز (ShakeGesture)

- **التعريف:** اكتشاف حركة اهتزازية متكررة وسريعة للجهاز في أي اتجاه.
- **آلية الاكتشاف:** حساب `|a|` ومقارنته بعتبة `threshold` مع تطبيق `cooldown` لتجنب التكرار.
- **الخصائص:** `threshold` (الحساسية)، `cooldown` (فترة الراحة بالميلي ثانية)، `onShake` (دالة الاستجابة).
- **حالات الإيماءة:**
  - **START:** لحظة تجاوز `|a| > threshold` بعد انتهاء cooldown.
  - **ACTIVE:** تشغيل الأنيميشن (تذبذب العنصر يميناً ويساراً).
  - **END:** انتهاء الأنيميشن والعودة إلى الوضع الأصلي عبر `withSpring(0)`.
  - **CANCELLED:** ضمني عند إزالة الاشتراك.

#### ب. إيماءة التأرجح (SwingGesture)

- **التعريف:** اكتشاف حركة جانبية واسعة النطاق (أشبه بتأرجح الجهاز كالبندول).
- **آلية الاكتشاف:** مراقبة المحور X فقط، تجاوز العتبة `1.2`.
- **الخصائص:** `translateX` (قيمة الإزاحة الأنيميشنية)، `onSwing`.
- **ملاحظة معمارية:** الإيماءة تُعيد الوضع إلى المركز تلقائياً عند عودة `|x|` دون العتبة.

#### ج. إيماءة السقوط الحر (FreeFallGesture)

- **التعريف:** اكتشاف لحظة انعدام الجاذبية الظاهرية (كأن يُرمى الجهاز في الهواء أو يسقط).
- **آلية الاكتشاف:** `|a| < 0.5` يعني اختفاء قوة الجاذبية من القراءات.
- **الخصائص:** `scale` (يتقلص العنصر إلى 0.7 لمحاكاة الطفو)، `onFreeFall`.

### 3.1.5 مثال الكود

```typescript
import { useShake } from '@gesture-kit/sensors';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

// استخدام الـ Hook مباشرةً للتحكم الكامل
const MyComponent = () => {
  const { shakeOffset } = useShake({
    threshold: 2.5,   // حساسية أعلى (أصعب في الاكتشاف)
    cooldown: 1000,   // ثانية كاملة بين كل اهتزازة والتالية
    onShake: () => {
      console.log('تم اكتشاف الاهتزاز!');
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeOffset.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Text>اهزّ الجهاز!</Text>
    </Animated.View>
  );
};
```

```typescript
// أو استخدام المكوّن الجاهز للبساطة
import { ShakeGesture } from '@gesture-kit/sensors';

const SimpleUsage = () => (
  <ShakeGesture onShake={() => Alert.alert('اهتزاز!')}>
    <Card />
  </ShakeGesture>
);
```

### 3.1.6 شرح الكود

- **`useShake({ threshold, cooldown, onShake })`:** يُهيّئ الـ Hook بالخيارات المطلوبة. جميعها اختيارية مع قيم افتراضية معقولة.
- **`shakeOffset`:** قيمة `SharedValue` من Reanimated تعمل على UI Thread مباشرةً، مما يضمن أنيميشن سلساً بـ 60 إطار/ثانية دون الاعتماد على JS Thread.
- **`useAnimatedStyle`:** يربط قيمة `shakeOffset` بخاصية `translateX` بشكل تفاعلي تلقائي.
- **`withSequence`:** يُنفّذ سلسلة من الأنيميشنات بالترتيب: يسار → يمين → يسار → يمين → عودة نابضة.
- **`withSpring(0)`:** النهاية النابضة تُعطي إحساساً طبيعياً بالتخميد بدلاً من التوقف المفاجئ.

### 3.1.7 التنفيذ الداخلي

```typescript
// المصدر الكامل لـ useShake
export const useShake = ({
  threshold = 2.2,
  cooldown = 800,
  onShake,
}: UseShakeOptions = {}) => {
  const shakeOffset = useSharedValue(0); // ← على UI Thread
  const lastShake = useRef(0);           // ← مرجع زمني لا يُسبب إعادة رسم

  useEffect(() => {
    Accelerometer.setUpdateInterval(100); // 10 قراءات/ثانية

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const acceleration = Math.sqrt(x * x + y * y + z * z); // المقدار المطلق
      const now = Date.now();

      // فحص العتبة والـ Cooldown معاً
      if (acceleration > threshold && now - lastShake.current > cooldown) {
        lastShake.current = now;

        // تسلسل الأنيميشن على UI Thread
        shakeOffset.value = withSequence(
          withTiming(-10, { duration: 40 }),
          withTiming(10,  { duration: 40 }),
          withTiming(-8,  { duration: 40 }),
          withTiming(8,   { duration: 40 }),
          withSpring(0)
        );

        onShake?.();
      }
    });

    return () => subscription.remove();
  }, [threshold, cooldown, onShake]);

  return { shakeOffset };
};
```

**التصميم الهندسي:** استخدام `useRef` لـ `lastShake` بدلاً من `useState` يعني أن تحديث قيمته لا يُسبب إعادة رسم المكوّن (Re-render)، وهو قرار أداء صحيح تماماً. كذلك، وضع كامل منطق الأنيميشن في `shakeOffset.value` يضمن تنفيذه على UI Thread بالكامل.

### 3.1.8 حالات الاستخدام الفعلية

- **تطبيقات الألعاب:** هزّ الجهاز لرمي النرد أو خلط الأوراق.
- **تطبيقات الإنتاجية:** هزّ الجهاز للتراجع عن آخر إجراء (Undo) — نمط مستخدم في iOS.
- **التطبيقات الاجتماعية:** تأرجح الجهاز للتنقل بين المحتوى.
- **تطبيقات الأمان:** إشارة طوارئ تُطلَق بهزّ سريع.
- **السقوط الحر:** تطبيقات حماية البيانات التي تقفل الشاشة تلقائياً عند اكتشاف سقوط الجهاز.
## القسم الثاني: إيماءات الإمالة والتوجّه

### 3.2.1 تعريف القسم

تُمثّل هذه الفئة الإيماءات التي تعتمد على **الوضعية الثابتة أو الانتقالية** للجهاز في الفراغ، لا على الحركة المفاجئة. بدلاً من قياس ارتفاع التسارع الكلي، تُحلّل هذه الإيماءات **توزيع قوة الجاذبية** على المحاور الفردية لاستنتاج اتجاه الإمالة أو وضعية الجهاز. تشمل هذه الفئة: `TiltLeftGesture`، `TiltRightGesture`، `TiltForwardGesture`، `TiltBackwardGesture`، `FlipGesture`، و`FaceUpDownGesture`.

### 3.2.2 آلية العمل

عندما يكون الجهاز ثابتاً، تُمثّل القراءات الثلاثة (x, y, z) تأثير الجاذبية موزّعاً على المحاور:

```
الجهاز مستوٍ أفقياً:     x≈0,  y≈0,  z≈1
مائل يساراً 45°:         x≈0.7, y≈0, z≈0.7
مائل كلياً يساراً 90°:   x≈1,  y≈0,  z≈0
مقلوب وجهاً للأسفل:      x≈0,  y≈0,  z≈-1
```

يُستغل هذا التوزيع لاستنتاج الوضعية بدقة معقولة دون الحاجة إلى جيروسكوب.

**تحويل القيم إلى زوايا (Angle Mapping):**

تستخدم `useTiltForward` و`useFlip` دالة `interpolate` من Reanimated لتحويل قيم المستشعر الخام (من -1 إلى 1) إلى زوايا أنيميشن مفيدة:

```
interpolate(z, [-1, 1], [180, 0])
// z = 1  →  0°   (وجه الشاشة للأعلى)
// z = 0  →  90°  (الجهاز مستوٍ على جانبه)
// z = -1 →  180° (وجه الشاشة للأسفل)
```

### 3.2.3 منطق الاكتشاف

**للإمالات الأحادية (TiltLeft/Right/Forward/Backward):**

```
محور X → TiltLeft  عندما x > +0.7
محور X → TiltRight عندما x < -0.7
محور Y → TiltForward  (الـ z محسوب من y عبر interpolate)
محور Y → TiltBackward (عكس TiltForward)
```

**للانقلاب (Flip) والوجه (FaceUpDown):**

يُستخدم `useRef` لحفظ الحالة الحالية (`front` أو `back`) ومقارنتها بالقراءة الجديدة:

```typescript
let next = z > threshold ? 'front' : z < -threshold ? 'back' : current.current;
if (next !== current.current) {
  current.current = next;
  onFlip?.(next); // ← تُستدعى مرة واحدة فقط عند التغيير
}
```

هذا النمط يُعالج مشكلة الاستدعاء المتكرر (Multiple Triggers) الموجودة في الإمالات الأبسط.

### 3.2.4 الإيماءات بالتفصيل

#### أ. إيماءات الإمالة الجانبية (TiltLeft / TiltRight)

- **التعريف:** اكتشاف ميل الجهاز نحو اليسار أو اليمين عبر المحور X.
- **العتبة:** `x > 0.7` للإمالة اليسارية (لأن x الإيجابي يعني ميلاً نحو اليسار فيزيائياً).
- **الأنيميشن:** دوران العنصر بـ `-15` درجة (ميل خفيف بصري).
- **حالات الإيماءة:**
  - **ACTIVE:** طالما `x > 0.7`، يُطبَّق الأنيميشن ويُستدعى `onTiltLeft` بشكل متكرر.
  - **END:** عودة `x` دون العتبة → `rotation.value = withTiming(0)`.

#### ب. إيماءة الإمالة للأمام (TiltForward)

- **التعريف:** اكتشاف ميل الجهاز للأمام عبر المحور Y مع تحويل القيمة لزاوية دوران.
- **الأنيميشن:** دوران على محور X بين -30° و+30° بشكل متناسب.
- **حالات الإيماءة:** مستمرة وتعكس الزاوية الفعلية للميل بشكل حيّ.

#### ج. إيماءة الانقلاب (FlipGesture)

- **التعريف:** اكتشاف انقلاب الجهاز ليصبح وجه الشاشة للأسفل أو للأعلى.
- **العتبة:** `threshold = 0.6` على المحور Z.
- **الأنيميشن:** تحويل قيمة Z إلى زاوية دوران ناعمة عبر `withSpring`.
- **حالات الإيماءة:**
  - **START:** لحظة تجاوز `z` حد `threshold` في أي اتجاه.
  - **TRANSITION:** الأنيميشن التدريجي من 0° إلى 180° أو العكس.
  - **END:** استقرار على `front` أو `back`.
  - **CANCELLED:** عودة قبل تجاوز العتبة → تبقى الحالة السابقة.

#### د. إيماءة الوجه الأمامي/الخلفي (FaceUpDownGesture)

- تشابه `FlipGesture` لكنها تستخدم `withTiming` بدلاً من `withSpring`.
- تدعم وجهين مختلفين من المحتوى (front/back) وتخفي كل وجه عندما لا يكون ظاهراً (`backfaceVisibility: 'hidden'`).

### 3.2.5 مثال الكود

```typescript
import { useFlip } from '@gesture-kit/sensors';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

const FlipCard = () => {
  const { rotation, side } = useFlip({
    threshold: 0.6,
    onFlip: (side) => console.log(`الجهاز أصبح: ${side}`),
  });

  // الوجه الأمامي — ظاهر عندما rotation < 90°
  const frontStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: `${rotation.value}deg` },
    ],
    opacity: rotation.value < 90 ? 1 : 0,
  }));

  // الوجه الخلفي — ظاهر عندما rotation >= 90°
  const backStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: `${rotation.value + 180}deg` },
    ],
    opacity: rotation.value >= 90 ? 1 : 0,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, frontStyle]}>
        <Text>الوجه الأمامي</Text>
      </Animated.View>
      <Animated.View style={[styles.card, backStyle]}>
        <Text>الوجه الخلفي</Text>
      </Animated.View>
    </View>
  );
};
```

### 3.2.6 شرح الكود

- **`rotation`:** `SharedValue<number>` يحمل الزاوية الحالية (0 → 180).
- **`{ perspective: 1000 }`:** ضروري لإعطاء عمق ثلاثي الأبعاد حقيقي للتحويل.
- **`opacity` المشروط:** يتحكم في إخفاء/إظهار كل وجه عند تجاوز 90° بدلاً من `backfaceVisibility` وحده، لضمان التوافق عبر المنصات.
- **`rotation.value + 180`:** يبدأ الوجه الخلفي من 180° حتى لا يظهر مع الوجه الأمامي في نفس اللحظة.
- **`side`:** يُعيد الـ Hook الحالة الحالية (`front`/`back`) للاستخدام المنطقي خارج الأنيميشن.

### 3.2.7 التنفيذ الداخلي لـ FlipGesture

```typescript
export const useFlip = ({ threshold = 0.6, onFlip }: UseFlipOptions = {}) => {
  const rotation = useSharedValue(0);       // ← الزاوية على UI Thread
  const current = useRef<FlipSide>('front'); // ← الحالة بدون Re-render

  useEffect(() => {
    Accelerometer.setUpdateInterval(30); // 33fps — كافٍ للحركة الناعمة

    const sub = Accelerometer.addListener(({ z }) => {
      // تحويل z من [-1, 1] إلى زاوية [180, 0]
      const angle = interpolate(z, [-1, 1], [180, 0], Extrapolate.CLAMP);
      
      // أنيميشن نابض ناعم
      rotation.value = withSpring(angle, { damping: 15, stiffness: 120 });

      // اكتشاف تغيير الحالة (مرة واحدة فقط)
      let next = z > threshold ? 'front' : z < -threshold ? 'back' : current.current;
      if (next !== current.current) {
        current.current = next;
        onFlip?.(next);
      }
    });

    return () => sub.remove();
  }, [threshold, onFlip]);

  return { rotation, side: current.current };
};
```

**`Extrapolate.CLAMP`:** يمنع القيم من الخروج عن النطاق المحدد [0, 180] حتى لو جاءت قراءات المستشعر خارج [-1, 1] بسبب الضوضاء.

### 3.2.8 حالات الاستخدام

- **بطاقات التعلم:** قلب البطاقة للكشف عن الإجابة.
- **عرض المنتجات:** عرض الوجهين الأمامي والخلفي لمنتج.
- **ألعاب الورق:** محاكاة قلب الورقة فيزيائياً.
- **التنقل بين واجهتين:** الوضع العادي والوضع المظلم بقلب الجهاز.

---

## القسم الثالث: إيماءات الحركة المركّبة

### 3.3.1 تعريف القسم

تُمثّل هذه الفئة الأكثر تطوراً في `gesture-kit-sensor`. تعتمد على متابعة **حركة مستمرة ومتعددة المحاور** في آنٍ واحد، وتحويلها إلى تحريك ثنائي الأبعاد للعناصر. تشمل: `CircularMotionGesture` و`MultiAxisTiltGesture`.

### 3.3.2 آلية العمل

**القاسم المشترك:** كلا الإيماءتين يقرآن محورَي X وY معاً في كل إطار، ويُحوّلان القراءات إلى إحداثيات حركة ثنائية الأبعاد.

**مبدأ التحريك السلس:**

يعتمد كلاهما على `withSpring` مع `damping` و`stiffness` لمحاكاة حركة فيزيائية طبيعية:
```
damping  ↑ → حركة أبطأ مع تخميد أسرع
stiffness ↑ → استجابة أسرع للتغييرات
```

### 3.3.3 منطق الاكتشاف

**الحركة الدائرية (CircularMotion):**

```typescript
// تحويل x من [-1, 1] إلى [-radius, +radius] بالبكسل
const mappedX = interpolate(x, [-1, 1], [-radius, radius], Extrapolate.CLAMP);
const mappedY = interpolate(y, [-1, 1], [-radius, radius], Extrapolate.CLAMP);

translateX.value = withSpring(mappedX, { damping: smoothing, stiffness: 120 });
translateY.value = withSpring(mappedY, { damping: smoothing, stiffness: 120 });
```

**الإمالة متعددة المحاور (MultiAxisTilt):**

```typescript
// ضرب القيمة في 45 يعطي نطاقاً زاوياً [-45°, +45°]
rotateY.value = withSpring(x * 45, { damping: 20, stiffness: 90 });
rotateX.value = withSpring(-y * 45, { damping: 20, stiffness: 90 });
```

لاحظ إشارة السالب في `rotateX = -y * 45`: هذا ضروري لمطابقة الحدس البشري (الميل للأمام يدور الشاشة للخلف).

### 3.3.4 الإيماءات بالتفصيل

#### أ. الحركة الدائرية (CircularMotionGesture)

- **التعريف:** تتبع حركة الجهاز في المستوى الأفقي وتحريك عنصر داخل نطاق دائري.
- **معدل التحديث:** 16ms (≈60fps) — الأعلى في المكتبة، لأن الاستجابة الحية ضرورية.
- **الخصائص:** `radius` (نصف قطر الحركة بالبكسل)، `smoothing` (مقدار التخميد).
- **الحالات:** لا توجد حالات منفصلة — الإيماءة نشطة دائماً ما دام الاشتراك قائماً.

#### ب. الإمالة متعددة المحاور (MultiAxisTiltGesture)

- **التعريف:** تحويل إمالة الجهاز على محورَي X وY إلى تأثير Parallax ثلاثي الأبعاد.
- **معدل التحديث:** 16ms — لأن التأخير في هذه الإيماءة مزعج بصرياً.
- **الخصائص:** `rotateX` و`rotateY` (SharedValues للدوران).
- **لا تدعم callback** — إيماءة بصرية بحتة.

### 3.3.5 مثال الكود

```typescript
import { useMultiAxisTilt } from '@gesture-kit/sensors';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

// تأثير Parallax ثلاثي الأبعاد
const ParallaxCard = () => {
  const { rotateX, rotateY } = useMultiAxisTilt();

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 600 },
      { rotateX: `${rotateX.value}deg` },
      { rotateY: `${rotateY.value}deg` },
    ],
  }));

  return (
    <Animated.View style={[styles.card, cardStyle]}>
      <Text style={styles.title}>بطاقة ثلاثية الأبعاد</Text>
    </Animated.View>
  );
};
```

```typescript
// الحركة الدائرية
import { useCircularMotion } from '@gesture-kit/sensors';

const FloatingBall = () => {
  const { translateX, translateY } = useCircularMotion({
    radius: 100,    // النطاق الأقصى بالبكسل
    smoothing: 10,  // خفيف وسريع الاستجابة
  });

  const ballStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return <Animated.View style={[styles.ball, ballStyle]} />;
};
```

### 3.3.6 شرح الكود

- **`perspective: 600`:** قيمة أقل من 1000 تعطي تأثير ثلاثي أبعاد أكثر حدة وظهوراً.
- **`rotateX` و`rotateY` معاً:** تجمعهما في `transform` يُنتج تأثير "اللوح المائل" الثلاثي الأبعاد.
- **`radius: 100`:** الكرة لن تتحرك أكثر من 100px في أي اتجاه بفضل `Extrapolate.CLAMP`.
- **`smoothing: 10`:** قيمة `damping` منخفضة تجعل الحركة خفيفة وذات تذبذب طفيف.

### 3.3.7 التنفيذ الداخلي

يتميز `useMultiAxisTilt` بأبسط بنية داخلية في المكتبة، لأنه لا يحتاج لأي state machine أو cooldown:

```typescript
export const useMultiAxisTilt = () => {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(16); // 60fps

    const sub = Accelerometer.addListener(({ x, y }) => {
      // x * 45 → نطاق [-45°, +45°]
      rotateY.value = withSpring(x * 45,  { damping: 20, stiffness: 90 });
      // سالب y لتصحيح اتجاه الحدس البشري
      rotateX.value = withSpring(-y * 45, { damping: 20, stiffness: 90 });
    });

    return () => sub.remove();
  }, []);

  return { rotateX, rotateY };
};
```

البساطة هنا هي القوة: لا توجد متغيرات إضافية، ولا استدعاءات معقدة، ولا حسابات ثقيلة. كل القرار يتم في سطرين فقط.

### 3.3.8 حالات الاستخدام

- **الحركة الدائرية:** محاكاة مستوى الماء في تطبيقات القياس، تحريك الشخصية في ألعاب المتاهة.
- **الإمالة متعددة المحاور:** تأثيرات بطاقات العرض، واجهات التطبيقات الغامرة، تأثير المصباح الفانوسي، عرض النماذج ثلاثية الأبعاد.
## 4. معمارية التنفيذ في Gesture Kit

### 4.1 الهيكل العام للوحدة

تتبع `gesture-kit-sensor` نمط **Hook-First Architecture**، وهو نمط معماري يضع منطق الأعمال كاملاً في Custom Hooks قابلة للاستخدام المستقل، بينما تكون المكونات (Components) مجرد غلاف بصري رفيع يربط الـ Hook بشجرة عرض Reanimated.

```
gesture-kit-sensor/
├── types.ts           ← تعريفات الأنواع المشتركة
├── index.ts           ← نقطة التصدير الموحدة
├── hooks/             ← المنطق (القلب)
│   ├── useShake.ts
│   ├── useTiltLeft.ts
│   ├── useTiltRight.ts
│   ├── useTiltForward.ts
│   ├── useTiltBackward.ts
│   ├── useFlip.ts
│   ├── useFaceUpDown.ts
│   ├── useFreeFall.ts
│   ├── useSwing.ts
│   ├── useCircularMotion.ts
│   └── useMultiAxisTilt.ts
└── components/        ← المكونات (الغلاف)
    ├── ShakeGesture.tsx
    ├── TiltLeftGesture.tsx
    └── ...
```

### 4.2 نظام تعريفات الأنواع (types.ts)

تُعرّف `types.ts` التسلسل الهرمي لأنواع الأحداث:

```typescript
// القاعدة المشتركة لكل الأحداث الحسّية
export interface BaseGestureEvent {
  absoluteX: number;
  absoluteY: number;
  x: number;
  y: number;
}

// امتداد أساسي يضيف بيانات المستشعر
export interface SensorEvent extends BaseGestureEvent {
  accelerationX: number;
  accelerationY: number;
  accelerationZ: number;
}

// أحداث متخصصة لكل نوع إيماءة
export interface TiltEvent extends SensorEvent {
  angle: number;
  direction: 'left' | 'right' | 'forward' | 'backward';
}

export interface ShakeEvent extends SensorEvent {
  intensity: number;
  duration: number;
}

export interface FlipEvent extends SensorEvent {
  orientation: 'faceUp' | 'faceDown';
}

export interface MotionEvent extends SensorEvent {
  rotationX: number;
  rotationY: number;
  rotationZ: number;
}
```

**ملاحظة معمارية:** يُلاحظ أن هذه الأنواع أغنى من المعلومات التي تُرسلها الـ Hooks حالياً في callbacks. هذا يكشف عن **فجوة تصميمية** حالية: الـ Types معرّفة بشكل صحيح لمرحلة قادمة، لكن التنفيذ الحالي يستخدم `() => void` فقط في معظم الأحداث.

### 4.3 نمط تصميم الـ Hooks

تتشارك جميع الـ Hooks بنية موحدة تُشكّل **نمط الـ Sensor Hook**:

```typescript
// النمط المعماري العام
type SensorHookOptions = {
  threshold?: number;   // حساسية الاكتشاف
  cooldown?: number;    // فترة منع التكرار (ms)
  duration?: number;    // مدة الأنيميشن (ms)
  onGesture?: () => void; // دالة الاستجابة
};

type SensorHookReturn = {
  // SharedValues للأنيميشن
  animatedValue: SharedValue<number>;
};

export const useSensorGesture = (options: SensorHookOptions = {}): SensorHookReturn => {
  // 1. تهيئة SharedValues على UI Thread
  // 2. useEffect للاشتراك في المستشعر
  // 3. منطق الاكتشاف داخل الـ Listener
  // 4. تنظيف عند الفصل
  // 5. إعادة SharedValues فقط
};
```

### 4.4 طبقة التجريد في المكونات

```typescript
// ShakeGesture.tsx — النمط المتكرر في جميع المكونات
export const ShakeGesture = ({ children, onShake }: Props) => {
  // ← يستخدم Hook فقط
  const { shakeOffset } = useShake({ onShake });

  // ← يبني useAnimatedStyle فقط
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeOffset.value }],
  }));

  // ← يُغلّف children فقط
  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};
```

المكوّن لا يحمل أي منطق ذاتي — إنه **تجريد نقي** يحوّل Hook إلى واجهة JSX.

### 4.5 نظام إدارة الحالة

تتعامل المكتبة مع إدارة الحالة بشكل توزيعي، حيث كل Hook يدير حالتها الداخلية بشكل مستقل:

```
حالة كل Hook:
┌─────────────────────────────────────────┐
│  SharedValue (UI Thread)                │
│  ← الحالة الأنيميشنية                 │
│                                         │
│  useRef (JS Thread, no re-render)       │
│  ← حالة الاكتشاف السابقة              │
│                                         │
│  useRef (JS Thread)                     │
│  ← الطابع الزمني للـ Cooldown          │
└─────────────────────────────────────────┘
```

لا يوجد State Machine صريح كـ XState، لكن `useRef` مع `SharedValue` يُنفّذان آلة حالة بسيطة ثنائية الحالة (Active/Inactive أو Front/Back).

### 4.6 تدفق البيانات الكامل

```
المستشعر الفيزيائي
       ↓
expo-sensors (Accelerometer.addListener)
       ↓
منطق الاكتشاف (داخل useEffect على JS Thread)
       ↓
تحديث SharedValue (ينتقل إلى UI Thread)
       ↓
useAnimatedStyle (يُنفَّذ على UI Thread)
       ↓
تطبيق الـ Style على Animated.View
       ↓
عرض الإطار بسلاسة (60fps)
```

---

## 5. التحديات والقيود

### 5.1 مشكلة التعارض في معدل التحديث

تُعدّ هذه أخطر مشكلة هيكلية في الوحدة. تستخدم `expo-sensors` إعداداً عالمياً (Global Setting) لمعدل تحديث كل مستشعر. عند استخدام إيماءتين مختلفتين تُسجّلان في نفس المستشعر في نفس الشاشة:

```typescript
// ⚠️ مشكلة: كلاهما يعدّل setUpdateInterval عالمياً
const { shakeOffset } = useShake();     // → setUpdateInterval(100)
const { rotateX } = useMultiAxisTilt(); // → setUpdateInterval(16)  ← يكتب فوق الأول
```

الـ Hook الذي يُهيَّأ آخراً سيتحكم في معدل التحديث، مما قد يُبطئ الـ Hooks الأخرى.

### 5.2 الضوضاء في بيانات المستشعر (Sensor Noise)

بيانات مستشعر التسارع تتضمن دائماً ضوضاء كمية صغيرة (Quantization Noise) حتى عند سكون الجهاز تماماً. هذه الضوضاء قد تُسبب:
- **اهتزازات وهمية** إذا كان الـ threshold منخفضاً جداً.
- **تأثيرات بصرية غير مستقرة** في الإيماءات الحساسة كـ MultiAxisTilt.

**الحل الموصى به:**

```typescript
// تطبيق Low-Pass Filter يدوياً
const smoothedX = useRef(0);
Accelerometer.addListener(({ x }) => {
  smoothedX.current = smoothedX.current * 0.8 + x * 0.2; // فلتر 80/20
  // استخدام smoothedX.current بدلاً من x
});
```

### 5.3 الاستدعاء المتكرر للـ Callbacks

كما أُشير سابقاً، الـ Hooks البسيطة (مثل `useTiltLeft` و`useSwing`) تستدعي `onGesture` بشكل متكرر طالما الجهاز في وضع الإيماءة، لا مرة واحدة عند البدء. هذا قد يسبب عمليات ثقيلة غير مقصودة.

### 5.4 استهلاك البطارية

تشغيل مستشعر التسارع بمعدل 60fps (16ms) بشكل مستمر يستهلك طاقة ملحوظة. استخدام عدة Hooks بمعدل عالٍ في نفس الوقت يُضاعف هذا الأثر.

### 5.5 التوافق عبر الأجهزة

دقة مستشعر التسارع تختلف بين الأجهزة. الأجهزة الرخيصة قد تُعطي قراءات أقل دقة وأعلى ضوضاءً، مما يجعل العتبات الافتراضية غير مثالية لجميع الأجهزة.

---

## 6. أفضل الممارسات

### 6.1 اختيار معدل التحديث المناسب

```typescript
// ✅ صحيح: معدل يتناسب مع طبيعة الإيماءة
useEffect(() => {
  // للأنيميشن الحيّ والناعم
  Accelerometer.setUpdateInterval(16); // 60fps لـ Parallax

  // للاكتشاف الحدثي فقط
  Accelerometer.setUpdateInterval(100); // 10fps لـ Shake
}, []);
```

### 6.2 تجنب التعارض بين الـ Hooks

```typescript
// ⚠️ تجنّب استخدام hooks متعددة بمعدلات مختلفة
// ✅ استخدم Hook واحد يجمع المنطق المطلوب إذا أمكن
```

### 6.3 تطبيق Cooldown للحوادث الحدثية

```typescript
// ✅ دائماً طبّق cooldown على الـ callbacks التي تُنفّذ منطقاً ثقيلاً
const { shakeOffset } = useShake({
  cooldown: 1500, // ثانية ونصف بين كل حدث
  onShake: () => expensiveOperation(),
});
```

### 6.4 تنظيف الاشتراكات

```typescript
// ✅ دائماً أعِد دالة التنظيف من useEffect
useEffect(() => {
  const sub = Accelerometer.addListener(handler);
  return () => sub.remove(); // ← لا تنسَ هذا أبداً
}, []);
```

### 6.5 اعتبارات تجربة المستخدم

- **أعطِ تغذية راجعة مرئية دائماً:** المستخدم لا يرى المستشعر، لذا يجب أن يرى نتيجة بصرية واضحة لإيماءته.
- **لا تجعل الإيماءة الحسّية المسار الوحيد:** وفّر دائماً بديلاً لمسياً للمستخدمين في بيئات مختلفة.
- **وفّر تعليمات أولية (Onboarding):** أخبر المستخدم بالإيماءات المتاحة عند أول استخدام.
- **اختبر على أجهزة حقيقية:** المحاكيات لا تدعم المستشعرات الفيزيائية.
- **راعِ حالات الإمكانية (Accessibility):** وفّر بديلاً للمستخدمين الذين اختاروا تعطيل ميزات الحركة (`reduceMotion`).

---

## 7. الخاتمة

تُمثّل وحدة `gesture-kit-sensor` طبقة تفاعل متقدمة تُوظّف مستشعر التسارع كأداة للتواصل بين المستخدم والتطبيق خارج حدود الشاشة. من خلال تحليل الكود المصدري، يتضح أن المكتبة قد أحسنت في عدة محاور هندسية جوهرية:

**الإنجازات الهندسية:**
1. اعتماد `react-native-reanimated` جعل جميع الأنيميشنات تعمل على UI Thread بمعزل عن JS Thread.
2. نمط Hook-First يُتيح للمطورين قدراً كبيراً من المرونة في التخصيص.
3. استخدام `useRef` للحالة غير الأنيميشنية يمنع إعادات الرسم غير الضرورية.
4. التنظيف التلقائي للاشتراكات يمنع تسرب الذاكرة.

**مجالات التحسين المستقبلية:**
1. بناء مدير مركزي للمستشعر يوحّد الاشتراكات ويحل مشكلة تعارض `setUpdateInterval`.
2. إثراء الـ Callbacks لتمرير بيانات الحدث (Event Data) بدلاً من `() => void` فقط.
3. تطبيق Low-Pass Filter افتراضي لتقليل ضوضاء المستشعر.
4. إضافة `cooldown` للـ Hooks الإمالة البسيطة لمنع الاستدعاء المتكرر.

تُشكّل هذه الوحدة نموذجاً عملياً لكيفية سد الفجوة بين الفيزياء الحركية للأجهزة المحمولة وتجربة المستخدم الرقمية، مُقدّمةً للمطورين أدوات تُخفي تعقيدات المستشعرات وراء واجهة React بسيطة وتعبيرية.
