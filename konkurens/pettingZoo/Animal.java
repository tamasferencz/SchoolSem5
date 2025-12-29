import java.util.concurrent.ThreadLocalRandom;

public abstract class Animal implements Runnable {

    protected PettingZoo zoo;

    public Animal(PettingZoo zoo) {
        this.zoo = zoo;
    }

    @Override
    public void run() {
        while (zoo.isOpen()) {
            try {
                if (shouldMove()) {
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