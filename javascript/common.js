/** 
 * 
 * @author Lee Jun Soo
 * @version 1.0.0
 * 
 * -- 작성자 nect2r@kakao.com , nect2r.tistory.com
 * -- 최초 작성일 2022-09-28
 * -- 마지막 작성일 2022-10-07
 * 
 * -- 작성 목적 --
 * -- 공통적으로 사용되는 javascript 함수 모음
 * 
 * -- 함수명 정의 --
 * -- ※ 최대한 정의에 맞게 작성하려 했으나 isEmpty처럼 해당되지 않을 수 있으니 사용 전 함수 확인 필 ※
 * -- is* () {} * 에 해당하는지 확인한다.
 * -- is*With* () {} n 에 모두 해당하는지 확인한다.
 * -- is*by<Text> () {} <Text>에 의해 * 에 해당하는지 확인한다.
 * -- has* () {} *이 포함되는지 확인한다.
 * -- get* () {} *를 가져온다.
 */

 var nect2rUtils = (function () {
    'use strict'

    var _utils = {}

    /**
     * 변수,상수 선언
     */

    /**
     * Public function
     */
    _utils.isEmpty = function(value) { return isEmpty(value) }
    _utils.isKorean = function(value) { return isKorean(value) }
    _utils.isAlphabet = function(value) { return isAlphabet(value) }
    _utils.isInteger = function(value) { return isInteger(value) }
    _utils.isIntegerByRegExp = function(value) { return isIntegerByRegExp(value) }
    _utils.isFloatByRegExp = function(value) { return isFloatByRegExp(value) }
    _utils.isNumber = function(value) { return isNumber(value) }
    _utils.isAlphabetWithInteger = function(value) { return isAlphabetWithInteger(value) }
    _utils.isBranchRegnum = function(value) { return isBranchRegnum(value) }
    _utils.isEmail = function(value) { return isEmail(value) }
    _utils.isPhone = function(value) { return isPhone(value) }
    _utils.isBirthday = function(value) { return isBirthday(value) }
    _utils.hasKorean = function(value) { return hasKorean(value) }
    _utils.hasAlphabet = function(value) { return hasAlphabet(value) }
    _utils.hasAlphabet = function(value) { return isEmail(value) }
    _utils.hasInteger = function(value) { return hasInteger(value) }
    _utils.hasSpace = function(value) { return hasSpace(value) }
    _utils.getType = function(value) { return getType(value) }
    _utils.getValue = function(value) { return getValue(value) }
    _utils.ajaxSubmit = function(url, data, dataType, methodType, callback) { return ajaxSubmit(url, data, dataType, methodType, callback) }
    _utils.addCommaEveryThreeNumber = function(value) { return addCommaEveryThreeNumber(value) }
    _utils.removeComma = function(value) { return hasInteger(value) }
    _utils.removeHtmlTag = function(value) { return removeHtmlTag(value) }
    _utils.init = function(value) { return init(value) }
   
    /**
     * Start of is function
     */

    /** 
     * isEmpty 함수에 대한 설명 및 출처
     * 
     * 빈값 기준
     * String
     * ''
     * new String()
     * `` Template literals
     *     ${''} Template literals
     * Array
     *     []
     *     new Array()
     * Object
     *     {}
     *     new Object()
     *     new Proxy({}, {}) Proxy
     * null
     *     null
     * undefined
     *     undefined
     * 
     * 채워진 값 기준
     * 1
     * 'string'
     * [1]
     * {a:1}
     * 
     * true
     * false
     * 
     * new Boolean() // Boolean{false}
     * false // false
     * 
     * typeof new Boolean() // object
     * typeof false // boolean
     * 
     * typeof new Boolean() != typeof false
     * new Boolean() == false
     * 
     * 출처: https://sanghaklee.tistory.com/58 [이상학의 개발블로그:티스토리]
     */

    /**
     * isEmpty는 파라미터 값이 비었는지 확인한다. 
     * isEmpty 함수에 대한 설명 및 출처
     * 
     * 빈값 기준
     * String
     * ''
     * new String()
     * `` Template literals
     *     ${''} Template literals
     * Array
     *     []
     *     new Array()
     * Object
     *     {}
     *     new Object()
     *     new Proxy({}, {}) Proxy
     * null
     *     null
     * undefined
     *     undefined
     * 
     * 채워진 값 기준
     * 1
     * 'string'
     * [1]
     * {a:1}
     * 
     * true
     * false
     * 
     * new Boolean() // Boolean{false}
     * false // false
     * 
     * typeof new Boolean() // object
     * typeof false // boolean
     * 
     * typeof new Boolean() != typeof false
     * new Boolean() == false
     * 
     * 출처: https://sanghaklee.tistory.com/58 [이상학의 개발블로그:티스토리]
     * 
     * @param {*} value 빈값인지 확인하려는 파라미터
     * @returns 빈값이면 true 아니면 false
     */
    function isEmpty(value) {
        if (value === null) return true
        if (typeof value === 'undefined') return true
        if (typeof value === 'string' && value === '') return true
        if (Array.isArray(value) && value.length < 1) return true
        if (typeof value === 'object' && value.constructor.name === 'Object' && Object.keys(value).length < 1 && Object.getOwnPropertyNames(value) < 1) return true
        if (typeof value === 'object' && value.constructor.name === 'String' && Object.keys(value).length < 1) return true // new String()

        return false
    }

    /**
     * common.js 사용을 위해서 jquery의 여부를 확인함
     * 
     * @returns jquery가 존재하면 true, 아니면 false
     */
    function isJquery() {
        if(typeof jQuery == 'undefined') return false

        return true
    }

    /**
     * 파라미터가 한글인지 확인한다.(자음,모음도 포함)
     * 
     * @param {*} value 
     * @returns 한글만 있으면 true, isEmpty() 아니면 false
     */
    function isKorean(value) {
        var reg = /^[ㄱ-ㅎ가-힣-ㅏ-ㅣ]+$/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 알파벳인지 확인한다.
     * 
     * @param {*} value 
     * @returns 알파벳만 있으면 true, isEmpty() 아니면 false
     */
    function isAlphabet(value) {
        var reg = /^[a-zA-Z]+$/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 정수인지 확인한다.(타입 미고려)
     * 
     * @param {*} value 
     * @returns 정수면 true, isEmpty() 아니면 false
     */
    function isInteger(value) {
        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return Number(getValue(value)) % 1 === 0
        } else {
            return Number(value) % 1 === 0
        }
    }

    /**
     * 파라미터가 정수인지 확인한다.(정규식)
     * 
     * @param {*} value 
     * @returns 정수면 true, isEmpty() 아니면 false
     */
    function isIntegerByRegExp(value) {
        var reg = /^[0-9]+$/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 소수인지 확인한다.(정규식)
     * 
     * @param {*} value 
     * @returns 소수면 true, isEmpty() 아니면 false
     */
    function isFloatByRegExp(value) {
        var reg = /^\d+?[.]\d+?$/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 숫자인지 확인한다.(정수,실수)
     * 
     * @param {*} value 
     * @returns 숫자면 true, isEmpty() 아니면 false
     */
    function isNumber(value) {
        var reg = /^(([\d])|(\d+?[.]{1}\d+?))+$/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 알파벳과 정수만 있는지 확인한다.
     * 
     * @param {*} value 
     * @returns 알파벳과 정수만 true, 아니면 false
     */
    function isAlphabetWithInteger(value) {
        var reg = /^[a-zA-Z0-9]+$/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return !reg.test(getValue(value))
        } else {
            return !reg.test(value)
        }
    }

    /**
     * 파라미터가 사업자번호인지 확인한다.
     * 
     * @param {*} value 
     * @returns 사업자번호면 true, 아니면 false
     */
    function isBranchRegnum(value) {
        var reg = /^\d{3}-\d{2}-\d{5}$/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 이메일 형식인지 확인한다.
     * 
     * @param {*} value 
     * @returns 이메일 형식이면 true, 아니면 false
     */
    function isEmail(value) {
        var reg = /^([\w-]+)@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        if (isEmpty(value)) return true

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 휴대폰 형식인지 확인한다.
     * 
     * @param {*} value 
     * @returns 휴대폰 형식이면 true, 아니면 false
     */
    function isPhone(value) {
        var reg = /^\d{2,3}-\d{3,4}-\d{4}$/

        if (isEmpty(value)) return true

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 생년월일 형식인지 확인한다.
     * 
     * @param {*} value 8자리(19001231),6자리(001231), -제거하지 않아도됨
     * @returns 
     */
    function isBirthday(value) {
        if (isEmpty(value)) return true
        
        var reg6 = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/g
        var reg8 = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/g

        if (getType(value) == 'object') {
            value = getVlue(value).replace(/[^0-9]/g, "")

            return value.length == 8 ? reg8.test(value) : reg6.test(value)
        } else {
            return value.length == 8 ? reg8.test(value) : reg6.test(value)
        }
    }

    /**
     * End of is function
     */

    /**
     * Start of has function
     */

    /**
     * 파라미터가 한글을 포함하는지 확인한다.(자음,모음도 포함)
     * 
     * @param {*} value 
     * @returns 한글을 포함하면 true, isEmpty() 아니면 false
     */
    function hasKorean(value) {
        var reg = /[ㄱ-ㅎ가-힣-ㅏ-ㅣ]/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 알파벳을 포함하는지 확인한다.
     * 
     * @param {*} value 
     * @returns 포함하면 true, isEmpty() 아니면 false
     */
    function hasAlphabet(value) {
        var reg = /[a-zA-Z]/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터가 정수가 포함되는지 확인한다.
     * 
     * @param {*} value 
     * @returns 정수면 true, isEmpty() 아니면 false
     */
    function hasInteger(value) {
        var reg = /[0-9]/

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * 파라미터에 공백이 포함되는지 확인한다.
     * 
     * @param {*} value 
     * @returns 공백이 존재하면 true, 아니면 false
     */
    function hasSpace(value) {
        var reg = / /

        if (isEmpty(value)) return false

        if (getType(value) == 'object') {
            return reg.test(getValue(value))
        } else {
            return reg.test(value)
        }
    }

    /**
     * End of has function
     */

    /**
     * Start of get function
     */

    /**
     * 파라미터 값의 타입을 반환한다.
     * 
     * @param {*} value 타입을 확인할 파라미터
     * @returns 타입의 종류
     */
    function getType(value) {
        var type = typeof value

        if (value === null) return 'null'
        if (type == 'object' && Array.isArray(value)) return 'array'

        return type
    }

    /**
     * 파라미터가 객체의 value 를 리턴
     *  
     * @param {*} value 
     * @returns 
     */
    function getValue(value) {
        if(isJquery && value instanceof jQuery) {
            value.val()
        }

        return value.value
    }

    function getCurrentScreenId() {
        var currentUrl = location.href //현재 윈도우의 문서가 위치하는 url을 String으로 반환한다.

        return currentUrl.substring(currentUrl.lastIndexOf('/') + 1, currentUrl.indexOf('.dev'))   // '/'문자 부터 문자열의 처음까지
    }

    /**
     * End of get function
     */

    /**
     * Start of None-group function
     */

    /**
     * ajax 공통 모듈
     * 
     * @param {string} url 요청 URL
     * @param {*} data 서버로 보낼 데이터
     * @param {string} dataType 서버에서 받을 데이터 형식 (미지정 시 MIME 타입 참고 자동파싱)
     * @param {string} methodType 요청할 HTTP 메서드
     * @param {function} callback success시 실행할 함수
     */
    function ajaxSubmit(url, data, dataType, methodType, callback) {
        $.ajax({
            url: url,
            data: data,
            dataType: dataType,
            type: methodType,
            success: function (result) {
                callback(result)
            },
            error: function (e) {
                alert("error : " + e.responseText)
            }
        })
    }

    /**
     * End of None-group function
     */

    /**
     * Start of add, remove function
     */

    /**
     * 3자리 숫자마다 콤마 추가
     * 
     * @param {*} value 
     * @returns 
     */
    function addCommaEveryThreeNumber(value) {
        if (getType(value) == 'object') {
            return getValue(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } else {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }

    /**
     * 콤마 제거
     * 
     * @param {*} value 
     * @returns 
     */
    function removeComma(value) {
        if (getType(value) == 'object') {
            return getValue(value).replace(/(,)/g, "")
        } else {
            return value.replace(/(,)/g, "")
        }
    }

    /**
     * HTML태그 삭제
     * 
     * @param {*} html 
     * @returns 
     */
    function removeHtmlTag(value) {
        if (getType(value) == 'object') {
            return getValue(value).replace(/(<([^>]+)>)/gi, "")
        } else {
            return value.replace(/(<([^>]+)>)/gi, "")
        }
    }

    /**
     * End of add, remove function
     */

    return init()

    function init() {
        return _utils
    }
})()