package Crypto;

import javax.xml.bind.DatatypeConverter;
import java.util.Base64;

public class Base64Crypto {
    public Base64Crypto() {
    }

    public String encodeBase64Java8(String test) {
        return new String(Base64.getEncoder().encode(test.getBytes()));
    }

    public String decodeBase64Java8(String test) {
        return new String(Base64.getDecoder().decode(test.getBytes()));
    }

    public String encodeBase64Java6(String test) {
        return DatatypeConverter.printBase64Binary(test.getBytes());
    }

    public String decodeBase64Java6(String test) {
        return new String(DatatypeConverter.parseBase64Binary(test));
    }
}