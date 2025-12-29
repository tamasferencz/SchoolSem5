import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

public abstract class Animal implements Runnable {

    protected PettingZoo zoo;

    private List<Guest> guests = new ArrayList<>();

    public Animal(PettingZoo zoo) {
        this.zoo = zoo;
    }

    public synchronized boolean tryToAttach(Guest guest) {
        return guests.add(guest);
    }

    public synchronized boolean detach(Guest guest) {
        return guests.remove(guest);
    }

    public synchronized Guest getRandomGuest() {
        if (guests.isEmpty()) {
            return null;
        } else {
            int index = ThreadLocalRandom.current().nextInt(guests.size());
            return guests.get(index);
        }
    }

    private boolean gotSick() {
        return ThreadLocalRandom.current().nextInt(100) < 20;
    }

    public synchronized void cured() {
        this.notify();
    }

    @Override
    public void run() {
        while (zoo.isOpen()) {
            try {
                boolean ate = false;
                Guest feeder = getRandomGuest();

                if (feeder != null) {
                    ate = feeder.feed();
                }
                if (ate) {
                    if (gotSick()) {
                        System.out.println(this.getClass().getSimpleName() + " beteg lett!");

                        synchronized (this) {
                            for (Guest g : guests) {
                                g.leave(this);
                            }
                            guests.clear();
                        }

                        zoo.markSick(this);

                        synchronized (this) {
                            wait();
                        }

                        System.out.println(this.getClass().getSimpleName() + " meggyógyult!");
                    }
                }
                if (!ate && shouldMove()) {
                    synchronized (this) {
                        for (Guest g : guests) {
                            g.leave(this);
                        }
                        guests.clear();
                    }
                    zoo.move(this);
                }

                remainInPlace();

            } catch (InterruptedException e) {
                break;
            }
        }
    }

    private boolean shouldMove() {
        return ThreadLocalRandom.current().nextBoolean();
    }

    private void remainInPlace() throws InterruptedException {
        long sleepTime = ThreadLocalRandom.current().nextLong(70, 211);
        Thread.sleep(sleepTime);
    }
}