package Crypto;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class MD5Crypto {

    /**
	 * 평문을 받아 MD5로 암호화 적용 후 Hex 값으로 인코딩
	 * @param plainText
	 * @return
	 */
	public static String encryptToHex(String plainText) {
		MessageDigest md = null;

		try {
			md = MessageDigest.getInstance("MD5");
			md.update(plainText.getBytes());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}

		return HexEncoder.bytesToHex2(md.digest());
	}

	/**
	 * 평문을 받아 MD5로 암호화 적용 후 Base64 값으로 인코딩
	 * @param plainText
	 * @return
	 */
	public static String encryptToBase64(String plainText) {
		MessageDigest md = null;

		try {
			md = MessageDigest.getInstance("MD5");
			md.update(plainText.getBytes());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}

		return Base64.getEncoder().encodeToString(md.digest());
	}

}