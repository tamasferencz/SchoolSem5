import java.util.List;
import java.util.Map;
import java.util.concurrent.*;

/**
 * Egy koncertre negyfajta jegy kaphato: az A, B, C es D szektorokba.
 * Mindegyik jegyfajtabol 5 erheto el, osszesen tehat 20 jegy kaphato.
 * Mindegyik vasarlo eseten adott, melyik szektorba tartozo jegyet szeretne
 * venni.
 */
public class TicketSaleSimulator {
    private static final int SLEEP_TIME_MIN = 100;
    private static final int SLEEP_TIME_MAX = 500;
    private static final int SHUTDOWN_TIME = 15000;

    private static final List<String> TICKET_TYPES = List.of("SECTOR A", "SECTOR B", "SECTOR C", "SECTOR D");

    private static final int TICKET_COUNT_PER_SELLER = 5;
    private static final int SELLER_COUNT = TICKET_TYPES.size();
    private static final int CUSTOMER_COUNT = SELLER_COUNT * TICKET_COUNT_PER_SELLER;

    // ConcurrentHashMap a szálbiztos hozzáférés miatt
    private static Map<String, Integer> TICKET_INVENTORY = new ConcurrentHashMap<>();

    // BlockingQueue 1-es kapacitással a termelő-fogyasztó mintához
    private static BlockingQueue<String> TICKET_QUEUE = new ArrayBlockingQueue<>(1);

    // ExecutorService a szálak kezelésére
    private static ExecutorService executor = Executors.newFixedThreadPool(SELLER_COUNT + CUSTOMER_COUNT);

    public static void main(String[] args) {
        // Jegykeszlet feltoltese
        TICKET_TYPES.forEach(str -> TICKET_INVENTORY.put(str, TICKET_COUNT_PER_SELLER));

        // Seller szálak indítása minden jegytípusra
        for (String type : TICKET_TYPES) {
            executor.execute(() -> sellerAction(type));
        }

        // Customer szálak indítása (típusonként 5 db)
        int customerIdCounter = 1;
        for (String type : TICKET_TYPES) {
            for (int i = 0; i < 5; i++) {
                int finalId = customerIdCounter++;
                executor.execute(() -> customerAction(finalId, type));
            }
        }

        // A szimulacio futtatasa SHUTDOWN_TIME ideig, majd leallitas
        try {
            Thread.sleep(SHUTDOWN_TIME);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            executor.shutdownNow();
        }
    }

    /**
     * Ez a jegyarus mukodesenek megvalositasa.
     */
    private static void sellerAction(String ticketType) {
        System.out.printf("Started seller for %s%n", ticketType);

        try {
            // Amíg van készleten az adott jegyből
            while (TICKET_INVENTORY.getOrDefault(ticketType, 0) > 0) {
                // Csökkentjük a készletet és betesszük a sorba
                // (A sorrend fontos: előbb ellenőrzés/csökkentés, aztán sorba rakás,
                // de a blocking queue miatt a 'put' blokkolhat, így a készletkezelés logikája
                // itt egyszerűsítve van a feladatleírás sorrendjéhez igazodva).

                // Blokkoló művelet: megvárja, amíg lesz hely a sorban (kapacitás = 1)
                TICKET_QUEUE.put(ticketType);

                // Készlet csökkentése
                TICKET_INVENTORY.computeIfPresent(ticketType, (key, val) -> val - 1);

                System.out.println("New ticket available for " + ticketType);

                // Véletlenszerű várakozás
                Thread.sleep(ThreadLocalRandom.current().nextInt(SLEEP_TIME_MIN, SLEEP_TIME_MAX));
            }

            System.out.printf("Tickets for %s sold out%n", ticketType);

        } catch (InterruptedException e) {
            // Executor shutdown esetén ez normális
            Thread.currentThread().interrupt();
        }
    }

    /**
     * Ez a vasarlo mukodesenek megvalositasa.
     */
    private static void customerAction(int customerId, String ticketType) {
        try {
            boolean bought = false;
            while (!bought) {
                // Megnézzük (peek), mi van a sor elején
                String availableTicket = TICKET_QUEUE.peek();

                // Ha a sor nem üres ÉS a jegy típusa megegyezik azzal, amit keresünk
                if (ticketType.equals(availableTicket)) {
                    // Megpróbáljuk kivenni (remove). A remove(Object) true-t ad vissza, ha sikerült
                    // kivenni.
                    // Ez azért fontos, mert a peek és a kivétel között egy másik szál elvihette
                    // volna a jegyet.
                    if (TICKET_QUEUE.remove(ticketType)) {
                        System.out.printf("Customer %d got a ticket to %s%n", customerId, ticketType);
                        bought = true;
                    }
                }

                if (!bought) {
                    // Ha nem sikerült venni, várunk egy kicsit
                    Thread.sleep(ThreadLocalRandom.current().nextInt(SLEEP_TIME_MIN, SLEEP_TIME_MAX));
                }
            }
        } catch (InterruptedException e) {
            // Executor shutdown esetén ez normális
            Thread.currentThread().interrupt();
        }
    }
}