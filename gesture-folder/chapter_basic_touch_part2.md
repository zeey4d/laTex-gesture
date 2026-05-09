# الفصل: اللمس الأساسي — gesture-kit-basic-touch
## الجزء الثاني: أنواع الإيماءات بالتفصيل

---

## 4. أنواع الإيماءات في فئة اللمس الأساسي

### 4.1 الضغطة الواحدة — Tap

**التعريف:** لمس سريع وخفيف للشاشة بإصبع واحد، تنتهي مدته قبل الحد الأقصى المُعرَّف ودون انزلاق يُذكر.

**آلية الاكتشاف:** يرصد المُعرِّف أول حدث `DOWN`، ثم ينتظر حدث `UP`. إذا جاء `UP` قبل انتهاء `maxDuration` وكانت المسافة بين نقطتَي البداية والنهاية أقل من `maxDistance`، أُطلق الحدث `onTap`.

**الحالات:**
- `BEGAN` ← لحظة لمس الإصبع للشاشة
- `ACTIVE` ← لا توجد (إيماءة منفصلة)
- `END` ← رُفع الإصبع ضمن الشروط
- `FAILED` ← تجاوز المدة أو المسافة

**مثال عملي (Hook):**
```tsx
import { useTap } from 'gesture-kit-basic-touch';
import { GestureDetector } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

export function LikeButton() {
  // يُنشئ الـ hook كائن إيماءة مُهيَّأ مسبقاً
  const tapGesture = useTap({
    onTap: (event) => {
      // event.x, event.y → إحداثيات اللمس النسبية للعنصر
      // event.absoluteX, event.absoluteY → إحداثيات مطلقة
      console.log(`تم الضغط عند (${event.x}, ${event.y})`);
    },
    maxDuration: 400,   // حد أقصى 400ms
    maxDistance: 15,    // حد أقصى 15px للانزلاق
    enabled: true,
  });

  return (
    // GestureDetector يربط الإيماءة بالعنصر البصري
    <GestureDetector gesture={tapGesture}>
      <View><Text>❤️</Text></View>
    </GestureDetector>
  );
}
```

**مثال عملي (Component):**
```tsx
import { TapGesture } from 'gesture-kit-basic-touch';

export function LikeButton() {
  return (
    <TapGesture onTap={(e) => console.log('ضُغط!')} maxDuration={400}>
      <View><Text>❤️</Text></View>
    </TapGesture>
  );
}
```

**التفاصيل الداخلية:**
داخل `useTap`، يُستدعى `Gesture.Tap().numberOfTaps(1)`. تُعيّن قيمة `numberOfTaps(1)` للمكتبة الأساسية أن تنتظر ضغطة واحدة فحسب. تُسجَّل الاستجابة عبر `.onEnd()` وهي اللحظة التي يُرفع فيها الإصبع مع نجاح التعرف.

**حالات الاستخدام الواقعية:**
- الضغط على زر "إعجاب" أو "متابعة"
- الضغط على خلية في قائمة للانتقال إلى التفاصيل
- تحديد عنصر في شبكة صور

---

### 4.2 الضغطة المزدوجة — Double Tap

**التعريف:** ضغطتان متتاليتان سريعتان في المنطقة ذاتها، يفصل بينهما زمن أقل من `maxDelay`.

**آلية الاكتشاف:** يُهيَّأ المُعرِّف بـ `numberOfTaps(2)`. يرصد الضغطة الأولى ثم يظل في انتظار ضغطة ثانية. إن جاءت الثانية في النافذة الزمنية والمكانية المحددة، اكتملت الإيماءة. وإن لم تأتِ، فشلت الإيماءة وربما نُفِّذت الضغطة الأولى كـ Tap بسيط (إن وُجد مُعرِّف لها).

**مثال عملي:**
```tsx
import { useDoubleTap } from 'gesture-kit-basic-touch';
import { GestureDetector } from 'react-native-gesture-handler';

export function PhotoViewer({ photo }) {
  const doubleTap = useDoubleTap({
    onDoubleTap: (event) => {
      // عند الضغط المزدوج: تكبير الصورة
      console.log('تكبير عند النقطة:', event.x, event.y);
    },
    maxDelay: 300,    // أقصى زمن بين الضغطتين: 300ms
    maxDistance: 20,  // أقصى انزلاح: 20px
  });

  return (
    <GestureDetector gesture={doubleTap}>
      <Image source={photo} style={{ width: 300, height: 300 }} />
    </GestureDetector>
  );
}
```

**شرح السطور:**
- `numberOfTaps(2)` ← يُخبر المحرك بانتظار تسلسل ضغطتين
- `maxDuration` ← الحد الأقصى لكل ضغطة منفردة
- `maxDelay` ← يُمرَّر كـ `maxDuration` في RNGH ويعني الفاصل الزمني الكلي
- `.onEnd()` ← يُطلق الحدث فقط عند اكتمال كلتا الضغطتين

**حالات الاستخدام الواقعية:**
- تكبير الصورة في Instagram عند موضع اللمس
- تبديل حالة التشغيل/الإيقاف في مشغلات الوسائط
- تحديد كلمة في محررات النص

---

### 4.3 الضغطة الثلاثية — Triple Tap

**التعريف:** ثلاث ضغطات متتالية سريعة في النطاق الزمني والمكاني ذاته.

**آلية الاكتشاف:** مطابق لـ Double Tap مع `numberOfTaps(3)`.

**مثال عملي:**
```tsx
import { useTripleTap } from 'gesture-kit-basic-touch';

const tripleTap = useTripleTap({
  onTripleTap: (event) => {
    // تفعيل وضع المطور أو إجراء إمكانية الوصول
    enableDeveloperMode();
  },
  maxDelay: 400,
  maxDistance: 20,
});
```

**حالات الاستخدام الواقعية:**
- تفعيل وضع إمكانية الوصول (Accessibility) في iOS/Android
- تفعيل قائمة المطور في التطبيق
- اختصار لوحة مفاتيح لأمر نادر

---

### 4.4 الضغطة الرباعية — Quad Tap

**التعريف:** أربع ضغطات متتالية سريعة. تُستخدم في السياقات الاستثنائية التي تتطلب تأكيداً صريحاً من المستخدم.

**مثال عملي:**
```tsx
import { useQuadTap } from 'gesture-kit-basic-touch';

const quadTap = useQuadTap({
  onQuadTap: (event) => {
    // إعادة ضبط التطبيق للحالة الافتراضية
    resetToDefaults();
  },
});
```

**ملاحظة:** الضغطة الرباعية نادرة الاستخدام في تصميم UX المعياري وتُوظَّف غالباً لاختصارات المطورين أو إعدادات المصنع.

---

### 4.5 الضغط المطوّل — Long Press

**التعريف:** لمس الشاشة وإبقاء الإصبع دون حركة تُذكر لمدة تتجاوز `minDuration` (الافتراضي: 500ms).

**الحالات بالتفصيل:**
- `BEGAN` (onStart) ← لحظة لمس الإصبع، قبل اكتمال المدة
- `ACTIVE` ← اكتملت المدة الدنيا، الإيماءة نشطة
- `END` (onEnd) ← رُفع الإصبع بعد الاكتمال
- `FAILED` ← تحرك الإصبع أكثر من `maxDistance` قبل اكتمال المدة
- `CANCELLED` (onFinalize) ← إلغاء خارجي

**مثال عملي:**
```tsx
import { useLongPress } from 'gesture-kit-basic-touch';

export function FileItem({ file }) {
  const longPress = useLongPress({
    onPressIn: (event) => {
      // عند بدء اللمس — إظهار تغذية راجعة بصرية فورية
      showHapticFeedback();
    },
    onLongPress: (event) => {
      // بعد 500ms — فتح قائمة السياق
      // event.duration يحمل المدة الفعلية بالميلي ثانية
      showContextMenu(file, event.x, event.y);
    },
    onPressOut: (event) => {
      // عند الرفع أو الإلغاء — إخفاء التغذية الراجعة
      hideHapticFeedback();
    },
    minDuration: 500,
    maxDistance: 10,
  });

  return (
    <GestureDetector gesture={longPress}>
      <FileIcon name={file.name} />
    </GestureDetector>
  );
}
```

**شرح السطور:**
- `minDuration: 500` ← المدة الدنيا بالميلي ثانية لاعتبار الضغط "مطولاً"
- `maxDistance: 10` ← إذا تحرك الإصبع أكثر من 10px تُلغى الإيماءة
- `onPressIn` ← يُربط بـ `.onStart()` في RNGH
- `onLongPress` ← يُربط بـ `.onEnd()` في RNGH
- `onPressOut` ← يُربط بـ `.onFinalize()` في RNGH

**حالات الاستخدام الواقعية:**
- إظهار قائمة سياق (Context Menu) في مديري الملفات
- تفعيل وضع التحديد/التحريك في قوائم التطبيقات
- اختيار نص في محررات النصوص

---

### 4.6 الضغط المطوّل جداً — Very Long Press

**التعريف:** مطابق للضغط المطوّل لكن بحد أدنى أعلى (الافتراضي: 1500ms). يُستخدم للإجراءات التي تتطلب تأكيداً ضمنياً أطول أو مقاومة الضغط العرضي.

**مثال عملي:**
```tsx
import { useVeryLongPress } from 'gesture-kit-basic-touch';

const veryLongPress = useVeryLongPress({
  onVeryLongPress: (event) => {
    // 1.5 ثانية من الضغط → حذف العنصر مع تأكيد
    confirmAndDelete();
  },
  minDuration: 1500,
});
```

**حالات الاستخدام الواقعية:**
- إجراءات الحذف أو إعادة الضبط التي تتطلب ضغطاً متعمداً
- تفعيل ميزات متقدمة في لوحات التحكم الصناعية

---

### 4.7 النقر ثم الاستمرار — Tap and Hold

**التعريف:** إيماءة مركبة تجمع بين ضغطة سريعة وضغط مطوّل على العنصر ذاته. تختلف عن Tap في أنها تستلزم الاستمرار، وتختلف عن Long Press في أن التمييز يعتمد على خيار المستخدم بين الإجراءين.

**آلية الاكتشاف:** تُبنى باستخدام `Gesture.Exclusive()` الذي يُعطي الأولوية لإيماءة الضغط المطوّل على حساب الضغطة البسيطة، مما يضمن أن الضغط القصير يُطلق `onTap` بينما الضغط الطويل يُطلق `onTapAndHold`.

**مثال عملي:**
```tsx
import { useTapAndHold } from 'gesture-kit-basic-touch';

export function AudioButton() {
  const tapAndHold = useTapAndHold({
    onTap: (event) => {
      // ضغطة قصيرة: تشغيل/إيقاف
      togglePlayback();
    },
    onTapAndHold: (event) => {
      // ضغط طويل: إظهار خيارات إضافية
      showAudioOptions();
    },
    holdDuration: 500,
  });

  return (
    <GestureDetector gesture={tapAndHold}>
      <PlayButton />
    </GestureDetector>
  );
}
```

**التفاصيل الداخلية:**
```
Gesture.Exclusive(
  holdGesture,  // الأولوية الأعلى: LongPress
  tapGesture    // الأولوية الأدنى: Tap
)
```
`Gesture.Exclusive` يضمن أن تُلغى إيماءة Tap إذا نجحت إيماءة LongPress، وبالعكس.

---

### 4.8 إلغاء الضغطة — Tap Cancel

**التعريف:** يُكتشف هذا الحدث حين يبدأ المستخدم ضغطة ثم يُلغيها بتحريك الإصبع بعيداً أو برفعه خارج حدود العنصر.

**آلية الاكتشاف:** يُستمع إلى حدث `.onTouchesCancelled()` من RNGH، وهو ما يحدث حين يرصد النظام أن الإصبع خرج من نطاق الاعتراف.

**مثال عملي:**
```tsx
import { useTapCancel } from 'gesture-kit-basic-touch';

export function PressableCard() {
  const tapCancel = useTapCancel({
    onTapStart: (event) => {
      // بدء التأثير البصري (تعتيم، تصغير)
      setPressed(true);
    },
    onTapCancel: (event) => {
      // إلغاء التأثير البصري عند الإلغاء
      setPressed(false);
    },
  });

  return (
    <GestureDetector gesture={tapCancel}>
      <Animated.View style={cardStyle}>
        <Text>اضغط للمتابعة</Text>
      </Animated.View>
    </GestureDetector>
  );
}
```

**حالات الاستخدام:**
- إعادة ضبط التأثيرات البصرية عند إلغاء الضغط
- منع الإجراء العرضي حين يُدرك المستخدم خطأه

---

### 4.9 الضغط بالقوة — Press Force (Force Touch)

**التعريف:** ضغط الإصبع على الشاشة بقوة تتجاوز حداً معيناً `forceThreshold`. تدعمه أجهزة محددة (iPhone 6s–XS، وبعض أجهزة أندرويد).

**آلية الاكتشاف:** يستخدم `Gesture.ForceTouch()` من RNGH الذي يستمع لقيمة `force` في أحداث اللمس.

**مثال عملي:**
```tsx
import { usePressForce } from 'gesture-kit-basic-touch';

export function QuickAction({ item }) {
  const pressForce = usePressForce({
    onPressForce: (event) => {
      // event.force: قيمة بين 0.0 و 1.0
      if (event.force > 0.8) {
        // ضغط شديد: Peek & Pop
        showQuickPreview(item);
      }
    },
    forceThreshold: 0.5, // لا تستجيب إلا للضغط المتوسط فأكثر
  });

  return (
    <GestureDetector gesture={pressForce}>
      <ListItem data={item} />
    </GestureDetector>
  );
}
```

**حالات الاستخدام:**
- معاينة الروابط في Safari وتطبيقات المراسلة
- قوائم الإجراءات السريعة (Quick Actions)
