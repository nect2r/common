package Crypto;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class SHACrypto {
    /**
	 * 평문을 받아 MD5로 암호화 적용 후 Hex 값으로 인코딩
	 * @param plainText
	 * @return
	 */
	public static String encryptToHex(String plainText, String Algorithms) {
		MessageDigest md = null;

		try {
			md = MessageDigest.getInstance(Algorithms);
			md.update(plainText.getBytes("utf-8"));
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		return HexEncoder.bytesToHex2(md.digest());
	}

	/**
	 * 평문을 받아 MD5로 암호화 적용 후 Base64 값으로 인코딩
	 * @param plainText
	 * @return
	 */
	public static String encryptToBase64(String plainText, String Algorithms) {
		MessageDigest md = null;

		try {
			md = MessageDigest.getInstance(Algorithms);
			md.update(plainText.getBytes(("utf-8")));
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		return Base64.getEncoder().encodeToString(md.digest());
	}
}