# 🆘 Konkurens Programozás Vizsga

## Tartalom

1. Kötelező importok
2. Deklarációk (Interface → Konkrét osztály)
3. Legfontosabb metódusok
4. Kódminták
5. Buktatók

---

## 1. Kötelező importok

```java
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.*;
```

---

## 2. Deklarációk

Példák:

- ExecutorService — Executors.newFixedThreadPool(n)
- BlockingQueue — ArrayBlockingQueue
- ConcurrentMap — ConcurrentHashMap
- AtomicInteger — AtomicInteger

Példa: fix számú szál (pl. 10 db)

```java
// Fix számú szál (pl. 10 db)
ExecutorService executor = Executors.newFixedThreadPool(10);
BlockingQueue<String> queue = new ArrayBlockingQueue<>(10);
Map<String, Integer> map = new ConcurrentHashMap<>();
AtomicInteger counter = new AtomicInteger(0);
```

---

## 3. Legfontosabb metódusok

### ExecutorService

- `executor.execute(() -> { ... })` — feladat indítása (Runnable), nem ad vissza értéket.
- `executor.submit(() -> { ... })` — feladat indítása, visszaad egy `Future`-t.
- `executor.shutdown()` — normál leállítás (várja a futó feladatokat).
- `executor.shutdownNow()` — azonnali leállítás (megpróbálja megszakítani a futó feladatokat).

### BlockingQueue (A 3 viselkedési mód)

- Blokkolós (standard):
  - `put(e)` — betesz, ha tele van: vár.
  - `take()` — kivesz, ha üres: vár.
- Időzítős:
  - `offer(e, 100, TimeUnit.MILLISECONDS)` — próbál betenni 100ms-ig.
  - `poll(100, TimeUnit.MILLISECONDS)` — próbál kivenni 100ms-ig.
- Azonnali (kivételes):
  - `add(e)` — ha tele van: `IllegalStateException`.
  - `remove(e)` — kivesz egy konkrét elemet (true/false).
  - `peek()` — ránézés a fejre, nem veszi ki (ha üres: `null`).

### ConcurrentHashMap / Concurrent collections

- `putIfAbsent(key, val)` — csak akkor teszi be, ha a kulcs még nincs ott.
- `computeIfPresent(key, (k, v) -> v - 1)` — atomikus módosítás.

### AtomicInteger

- Szálbiztos számláló (helyettesíti a `++`-t több szálnál).

```java
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet(); //noveles
counter.decrementAndGet(); //csokkentes
```

### Szal Letrehozas/Inditas

```java
private FoodProducer producer;
private Thread producerThread;
producer = new FoodProducer(this);
producerThread = new Thread(producer);
producerThread.start();
```

---

## 4. Kódminták

A) Executor + Queue (Modern megoldás — ajánlott)

```java
// Deklarációk
BlockingQueue<String> queue = new ArrayBlockingQueue<>(5);
ExecutorService executor = Executors.newFixedThreadPool(2);

// Fogyasztó
executor.execute(() -> {
    try {
        while (true) {
            String item = queue.take(); // blokkol, ha üres
            System.out.println("Feldolgozva: " + item);
            Thread.sleep(ThreadLocalRandom.current().nextInt(100, 500));
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt(); // helyes megszakítás-kezelés
    }
});
```

B) Wait / Notify (Low-level megoldás)

```java
Object lock = new Object();
boolean ready = false;

// Várakozó szál
synchronized (lock) {
    while (!ready) {
        try {
            lock.wait(); // elengedi a lockot
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    System.out.println("Mehet!");
}

// Jelző szál
synchronized (lock) {
    ready = true;
    lock.notifyAll();
}
```

C) Véletlenszerű várakozás (Sleep)

```java
try {
    Thread.sleep(ThreadLocalRandom.current().nextInt(100, 500));
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
}
```

---

## 5. Buktatók

- Mindig legyen `try-catch` az olyan hívások körül, mint `sleep`, `wait`, `take`, `put` (InterruptedException).
- Generikusok: használj `List<String>`/`Map<K,V>` jelölést — ne hagyd le a tipusparamétert.
- `wait()` vs `sleep()`:
  - `wait()` elengedi a lockot (csak `synchronized`-ban hívható).
  - `sleep()` nem engedi el a lockot.
- Interface vs Class:
  - Helyes: `Map<String, Integer> m = new ConcurrentHashMap<>();`
  - A polimorfizmus használata fontos.
- Ne felejtsd el leállítani az `Executor`-t (`executor.shutdown()`), különben a program nem áll le.

---
