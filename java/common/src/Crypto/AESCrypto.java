package Crypto;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.Charset;
import java.util.Base64;

public class AESCrypto {

    // AES 암호 알고리즘, 암호 운용 방식 : ECB 모드, 패딩 기법 : PKCS7 고정
	public static String algorithm = "AES/ECB/PKCS5Padding";
	// 비밀키 : AES-256(256bits:32글자), AES-192(192bits:24글자), AES-128(128bits, 16글자)
	private final String secretKey = "01234567890123456789012345678901";

	public String encrypt(String text, Charset charset) {
		String encryptedText = null;

		try {
			Cipher cipher = Cipher.getInstance(algorithm);
			SecretKeySpec keySpec = new SecretKeySpec(secretKey.getBytes(charset), "AES");
			cipher.init(Cipher.ENCRYPT_MODE, keySpec);

			byte[] encryptedBytes = cipher.doFinal(text.getBytes(charset));
			encryptedText = new String(Base64.getEncoder().encode(encryptedBytes));
		} catch(Exception e) {
			e.printStackTrace();
		}

		return encryptedText;
	}

	public String decrypt(String text, Charset charset) {
		String decryptedText = null;

		try {
			byte[] textBytes =  Base64.getDecoder().decode(text.getBytes());
			Cipher cipher = Cipher.getInstance(algorithm);
			SecretKeySpec keySpec = new SecretKeySpec(secretKey.getBytes(charset), "AES");
			cipher.init(Cipher.DECRYPT_MODE, keySpec);

			decryptedText = new String(cipher.doFinal(textBytes), charset);
		} catch(Exception e) {
			e.printStackTrace();
		}

		return decryptedText;
	}

}