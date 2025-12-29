import java.util.concurrent.ThreadLocalRandom;

public class FoodProducer implements Runnable {
    protected PettingZoo zoo;

    public FoodProducer(PettingZoo zoo) {
        this.zoo = zoo;
    }

    @Override
    public void run() {
        while (zoo.isOpen()) {
            try {
                int food = CreateFood();

                zoo.addFood(food);

                Thread.sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
                break;
            }

        }

    }

    private int CreateFood() {
        return ThreadLocalRandom.current().nextInt(1, 5);
    }
}
