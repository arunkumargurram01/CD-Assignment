import java.util.*;

public class ArrayShuffle{
    public static void main(String[] args){
        Integer[] arr = {1,2,3,4,5,6,7};
        List<Integer> list = Arrays.asList(arr);
        Collections.shuffle(list); //shuffling using built-in collection class method
        list.toArray(arr);
        System.out.println(Arrays.toString(arr));

    }
}

