package konkurens.gy1;
import java.io.*;


public class Main {
    public static void main(String[] args) {
        ThreadGroup group = new ThreadGroup("MyThreadGroup");

        Thread t1 = new Thread(group, () -> {
            String text = "hello ";
            String path = "/Users/tamas/Desktop/School5/KonkurensProg/GY/GY1/tex2.txt";
            try (BufferedWriter out = new BufferedWriter(new FileWriter(path))) {
                for (int i = 0; i < 100; ++i) {
                    for (char c : text.toCharArray()) {
                        // System.out.print(c);
                        out.write(c);
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }, "ConsoleThread");

        Thread t2 = new Thread(group, () -> {
            String text = "word ";
            String path = "/Users/tamas/Desktop/School5/KonkurensProg/GY/GY1/text.txt";

            try (BufferedWriter out = new BufferedWriter(new FileWriter(path))) {
                for (int i = 0; i < 100; ++i) {
                    for (char c : text.toCharArray()) {
                        // System.out.print(c);
                        out.write(c);
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }, "FileThread");

        t1.start();
        t2.start();

        group.list();
    }
}
