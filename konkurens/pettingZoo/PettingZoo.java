import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class PettingZoo implements Runnable {

    private AtomicInteger guestCount = new AtomicInteger(0);

    private volatile boolean open = true;

    private FoodProducer producer;
    private Thread producerThread;

    private Doctor doctor;
    private Thread doctorThread;

    private List<Animal> stable = new ArrayList<>();
    private List<Animal> runway = new ArrayList<>();

    private List<Thread> animalThreads = new ArrayList<>();

    private BlockingQueue<Integer> foodSupply = new ArrayBlockingQueue<>(10);

    public PettingZoo() {
        for (int i = 0; i < 3; i++) {
            startAnimal(new Goat(this));
        }
        for (int i = 0; i < 5; i++) {
            startAnimal(new Bunny(this));
        }
        for (int i = 0; i < 10; i++) {
            startAnimal(new GuineaPig(this));
        }
        producer = new FoodProducer(this);
        producerThread = new Thread(producer);
        producerThread.start();

        doctor = new Doctor(this);
        doctorThread = new Thread(doctor);
        doctorThread.start();
    }

    private void startAnimal(Animal animal) {
        stable.add(animal);
        Thread t = new Thread(animal);
        animalThreads.add(t);
        t.start();
    }

    public void enter(Guest guest) {
        guestCount.incrementAndGet();
    }

    public void exit(Guest guest) {
        guestCount.decrementAndGet();
    }

    public boolean isOpen() {
        return open;
    }

    public synchronized void move(Animal animal) {
        if (stable.contains(animal)) {
            stable.remove(animal);
            runway.add(animal);
        } else if (runway.contains(animal)) {
            runway.remove(animal);
            stable.add(animal);
        }
    }

    public void markSick(Animal animal) {
        doctor.addSickAnimal(animal);
    }

    public void close() {
        open = false;

        try {
            producerThread.join(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        if (producerThread.isAlive()) {
            producerThread.interrupt();
        }

        try {
            doctorThread.join(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        if (doctorThread.isAlive()) {
            doctorThread.interrupt();
        }

        long deadline = System.currentTimeMillis() + 10000;

        for (Thread t : animalThreads) {
            long timeLeft = deadline - System.currentTimeMillis();

            if (timeLeft > 0) {
                try {
                    t.join(timeLeft);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            if (t.isAlive()) {
                t.interrupt();
            }
        }
    }

    public boolean addFood(int food) {
        try {
            return foodSupply.offer(food, 100, TimeUnit.MILLISECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return false;
        }
    }

    public int buyPetFood(int customer) {
        try {
            Integer food = foodSupply.poll(100, TimeUnit.MILLISECONDS);
            if (food != null) {
                return food;
            } else {
                return 0;
            }

        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return 0;
        }
    }

    public synchronized Animal getRandomAnimal() {
        if (runway.isEmpty()) {
            return null;
        }
        int index = ThreadLocalRandom.current().nextInt(runway.size());
        return runway.get(index);
    }

    @Override
    public void run() {
        try {
            Thread.sleep(500);
            while (guestCount.get() > 0) {
                Thread.sleep(10);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}