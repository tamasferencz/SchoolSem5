import java.util.concurrent.ThreadLocalRandom;

public class Guest implements Runnable {

    private PettingZoo zoo;
    private int food = 0;
    private Animal currentAnimal = null;

    public Guest(PettingZoo zoo) {
        this.zoo = zoo;
    }

    public synchronized boolean feed() {
        if (food > 0) {
            food -= 1;
            return true;
        } else {
            return false;
        }
    }

    public synchronized void leave(Animal animal) {
        if (animal == this.currentAnimal) {
            this.currentAnimal = null;
        }
    }

    private void standStill() {
        try {
            Thread.sleep(50);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private boolean shouldStay() {
        return ThreadLocalRandom.current().nextInt(100) < 90;
    }

    private void printPet() {
        System.out.println("Guest simogatja: " + currentAnimal.getClass().getSimpleName());
    }

    @Override
    public void run() {
        zoo.enter(this);

        try {
            int patience = ThreadLocalRandom.current().nextInt(50, 151);

            this.food = zoo.buyPetFood(patience);

            if (this.food <= 0) {
                System.out.println("I have nothing to do here...");
                zoo.exit(this);
                return;
            }

            while (zoo.isOpen() || this.food > 0) {

                Animal target = zoo.getRandomAnimal();

                if (target != null && target.tryToAttach(this)) {
                    this.currentAnimal = target;

                    while (shouldStay() && this.food > 0 && this.currentAnimal != null) {

                        synchronized (this.currentAnimal) {
                            if (this.currentAnimal != null) {
                                printPet();
                            }
                        }

                        Thread.sleep(100);
                    }

                    target.detach(this);
                    this.currentAnimal = null;
                }

                standStill();
            }

        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            zoo.exit(this);
        }
    }
}