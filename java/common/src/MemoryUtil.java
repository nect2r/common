public class MemoryUtil {
    // VM Heap Max Size
    public static String getMaxMemorySize() {
        long maxMemory = (Runtime.getRuntime().maxMemory()) / (1024 * 1024);
        return maxMemory + "MB";
    }

    // VM Heap Total Size
    public static String getTotalMemorySize() {
        long totalMemory = (Runtime.getRuntime().totalMemory()) / (1024 * 1024);
        return totalMemory + "MB";
    }

    // VM Heap Allocation Size
    public static String getAllocMemorySize() {
        long allocMemory = ((Runtime.getRuntime().totalMemory()) - (Runtime.getRuntime().freeMemory())) /(1024 * 1024);
        return allocMemory + "MB";
    }
}