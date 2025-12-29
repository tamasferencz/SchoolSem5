import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class PettingZoo implements Runnable {

    private AtomicInteger guestCount = new AtomicInteger(0);

    private volatile boolean open = true;

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

    public void close() {
        open = false;

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

    public boolean buyPetFood(int customer) {
        try {
            int food = foodSupply.poll(100, TimeUnit.MILLISECONDS);
            if (food != 0) {
                return true;
            } else {
                return false;
            }

        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return false;
        }
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