/** 
 *  최초 작성일 2022-09-28
 *  최초 작성자 2022-09-28
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
function isEmpty (value) {
    if (value === null) return true
    if (typeof value === 'undefined') return true
    if (typeof value === 'string' && value === '') return true
    if (Array.isArray(value) && value.length < 1) return true
    if (typeof value === 'object' && value.constructor.name === 'Object' && Object.keys(value).length < 1 && Object.getOwnPropertyNames(value) < 1) return true
    if (typeof value === 'object' && value.constructor.name === 'String' && Object.keys(value).length < 1) return true // new String()

    return false
}

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
        url : url,
        data : data,
        dataType : dataType,
        type : methodType,
        success : function(result) {
            callback(result)
        },
        error : function(e) {
            alert("error : " + e.responseText)
        }
    })
}

/**
 * 파라미터 값의 타입을 반환한다.
 * 
 * @param {*} value 타입을 확인할 파라미터
 * @returns 타입의 종류
 */
function checkType(value) {
    var type = typeof value

    if(value === null) return 'null'
    if(type == 'object' && Array.isArray(value)) return 'array'

    return type
}

/**
 * 파라미터가 이메일 형식에 맞는지 검증
 * 
 * @param {*} email 
 * @returns 형식에 틀리면 true, 아니면 false
 */
function valiEmail(email) {
    var reg = /^([\w-]+)@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    if(isEmpty(email)) return true

    if(checkType(email) == 'object'){
        return !reg.test(email.val())
    }else{
        return !reg.test(email)
    }
}

/**
 * 파라미터가 휴대폰 형식에 맞는지 검증
 * 
 * @param {*} phone 
 * @returns 형식에 틀리면 true, 아니면 false
 */
function valiPhone(phone) {
    var reg = /^\d{2,3}-\d{3,4}-\d{4}$/

    if(isEmpty(phone)) return true

    if(checkType(phone) == 'object'){
        return !reg.test(phone.val())
    }else{
        return !reg.test(phone)
    }
}

/**
 * 파라미터가 생년월일 형식에 맞는지 검증
 * 
 * @param {*} birthday 8자리(19001231),6자리(001231), -제거하지 않아도됨
 * @returns 
 */
function valiBirthday(birthday) {
    if(isEmpty(birthday)) return true

    birthday = birthday.replace(/[^0-9]/g, "");

    var reg6 = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/g
    var reg8 = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/g

    if(checkType(birthday) == 'object'){
        return birthday.val().length == 8 ? !reg8.test(birthday.val()) : !reg6.test(birthday.val())
    }else{
        return birthday.length == 8 ? !reg8.test(birthday) : !reg6.test(birthday)
    }
}

/**
 * 파라미터가 한글인지 여부
 * 
 * @param {*} value 
 * @returns 한글이면 true, 아니면 false
 */
function isKorean(value) {
    var reg = /[^ㄱ-ㅎ가-힣]/

    if(isEmpty(value)) return true

    if(checkType(value) == 'object'){
        return !reg.test(value.val())
    }else{
        return !reg.test(value)
    }
}

/**
 * 파라미터가 알파벳인지 여부
 * 
 * @param {*} value 
 * @returns 알파벳이면 true, 아니면 false
 */
function isAlphabet(value) {
    var reg = /[^a-zA-Z]/

    if(isEmpty(value)) return true

    if(checkType(value) == 'object'){
        return !reg.test(value.val())
    }else{
        return !reg.test(value)
    }
}

/**
 * 파라미터가 숫자인지 여부
 * 
 * @param {*} value 
 * @returns 숫자면 true, 아니면 false
 */
function isDigit(value) {
    var reg = /[^0-9]/

    if(isEmpty(value)) return false

    if(checkType(value) == 'object'){
        return !reg.test(value.val())
    }else{
        return !reg.test(value)
    }
}

/**
 * 파라미터가 숫자와영문인지 여부
 * 
 * @param {*} value 
 * @returns 숫자와알파벳만 true, 아니면 false
 */
function isAlphabetWithDigit(value) {
    var reg = /[^a-zA-Z0-9]/

    if(isEmpty(value)) return false

    if(checkType(value) == 'object'){
        return !reg.test(value.val())
    }else{
        return !reg.test(value)
    }
}

/**
 * 
 * 
 * @param {*} value 
 * @returns 
 */
function isBranchRegnum(value) {
    var reg = /^\d{3}-\d{2}-\d{5}$/

    if(isEmpty(value)) return false

    if(checkType(value) == 'object'){
        return !reg.test(value.val())
    }else{
        return !reg.test(value)
    }
}

/**
 * 3자리 숫자마다 콤마 추가
 * 
 * @param {*} value 
 * @returns 
 */
function digitWithCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/**
 * 콤마 제거
 * 
 * @param {*} value 
 * @returns 
 */
function digitWithoutCommas(value) {
    return value.toString().replace(/(,)/g, "")
}

/**
 * 
 * 
 * @param {*} html 
 * @returns 
 */
function removeHtmlTag(html) {
    return html.replace(/(<([^>]+)>)/gi, "")
}