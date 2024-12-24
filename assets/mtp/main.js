jQuery.event.special.touchstart = {
	setup: function( _, ns, handle ) {
	    this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
	}
};
jQuery.event.special.touchmove = {
	setup: function( _, ns, handle ) {
		this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
	}
};
jQuery.event.special.wheel = {
	setup: function( _, ns, handle ){
		this.addEventListener("wheel", handle, { passive: true });
	}
};
jQuery.event.special.mousewheel = {
	setup: function( _, ns, handle ){
		this.addEventListener("mousewheel", handle, { passive: true });
	}
};

function setCookie(key, value, expiry) {
	var expires = new Date();
	expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
	document.cookie = key + '=' + value + ';path=/;samesite=strict;expires=' + expires.toUTCString();
}

function getCookie(key) {
	var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
	return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
	var keyValue = getCookie(key);
	setCookie(key, keyValue, '-1');
}

function clearCookieItem(item){
	let expires = new Date(new Date().getTime() - (1000 * 60 * 60));
	document.cookie = ""+item+"=''; domain=" + window.location.hostname + ";  path=/; expires="+expires.toUTCString();
}

function numberWithSep(x, sep = ' ') {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

String.prototype.hashCode = function() {
	var hash = 0,
	i, chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
	    chr = this.charCodeAt(i);
	    hash = ((hash << 5) - hash) + chr;
	    hash |= 0;
	}
	return hash;
}

function formatDate(date) {

	var dd = date.getDate();
	if (dd < 10) dd = '0' + dd;

	var mm = date.getMonth() + 1;
	if (mm < 10) mm = '0' + mm;

	var yy = date.getFullYear() % 100;
	if (yy < 10) yy = '0' + yy;

	return dd + '.' + mm + '.' + yy;
}

function remove_shit_from_buses(data){
	data = data.replace('#','');
	data = data.replace('№','');
	data = data.replace(/\s/g, '');

	return data.split(",");
}

function phone_format(phone){
	phone = phone.replace(/\D+/g,'');

	if (Array.from(phone)[0] == '8'){
		phone = phone.substring(1);
	}
	return '+7'+phone;
}

function phoneFormat(phone){
	phone = phone.replace(/\D+/g,'');

	phone = phone.substring(1);

	let pattern2 = new RegExp(/(\d{3})(\d{3})(\d{2})(\d{2})/g);

	phone = phone.replace( pattern2,'($1) $2-$3-$4' );
	//console.log(phone);
	return '+7 '+phone;
}

var $_GET = location.search.substr(1).split("&").reduce((o,i)=>(u=decodeURIComponent,[k,v]=i.split("="),o[u(k)]=v&&u(v),o),{});


if ($_GET['utm_source']) {
	setCookie('utm_source', encodeURIComponent($_GET['utm_source']), 1);
}

if ($_GET['utm_medium']) {
	setCookie('utm_medium', encodeURIComponent($_GET['utm_medium']), 1);
}

if ($_GET['utm_campaign']) {
	setCookie('utm_campaign', encodeURIComponent($_GET['utm_campaign']), 1);
}

if ($_GET['utm_term']) {
	setCookie('utm_term', encodeURIComponent($_GET['utm_term']), 1);
}

if ($_GET['utm_content']) {
	setCookie('utm_content', encodeURIComponent($_GET['utm_content']), 1);
}

if ($_GET['ref']) {
	sessionStorage.setItem('ref', $_GET['ref']);
}

if (sessionStorage.getItem('ShowChat') == 'true'){
	document.body.classList.add("show-stickchat");
}


function toUnicode(str) {
	return str.split('').map(function (value, index, array) {
		var temp = value.charCodeAt(0).toString(16).toUpperCase();
		if (temp.length > 2) {
			return '\\u' + ((temp.length==3)?'0':'') + temp;
		}
		return value;
	}).join('');
}

function num_word(value, words){  
	value = Math.abs(value) % 100; 
	var num = value % 10;
	if(value > 10 && value < 20) return words[2]; 
	if(num > 1 && num < 5) return words[1];
	if(num == 1) return words[0]; 
	return words[2];
}

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function messenger_check(msg_type, msg_text, modal){
	(function (f) {
		if (typeof exports === "object" && typeof module !== "undefined") {
			module.exports = f()
		} else if (typeof define === "function" && define.amd) {
			define([], f)
		} else {
			var g;
			if (typeof window !== "undefined") {
				g = window
			} else if (typeof global !== "undefined") {
				g = global
			} else if (typeof self !== "undefined") {
				g = self
			} else {
				g = this
			}
			g.protocolCheck = f()
		}
	})(function () {
		var define, module, exports;
		return (function e(t, n, r) {
			function s(o, u) {
				if (!n[o]) {
					if (!t[o]) {
						var a = typeof require == "function" && require;
						if (!u && a) return a(o, !0);
						if (i) return i(o, !0);
						var f = new Error("Cannot find module '" + o + "'");
						throw f.code = "MODULE_NOT_FOUND", f
					}
					var l = n[o] = {exports: {}};
					t[o][0].call(l.exports, function (e) {
						var n = t[o][1][e];
						return s(n ? n : e)
					}, l, l.exports, e, t, n, r)
				}
				return n[o].exports
			}

			var i = typeof require == "function" && require;
			for (var o = 0; o < r.length; o++) s(r[o]);
			return s
		})({
			1: [function (require, module, exports) {
				function _registerEvent(target, eventType, cb) {
					if (target.addEventListener) {
						target.addEventListener(eventType, cb);
						return {
							remove: function () {
								target.removeEventListener(eventType, cb);
							}
						};
					} else {
						target.attachEvent(eventType, cb);
						return {
							remove: function () {
								target.detachEvent(eventType, cb);
							}
						};
					}
				}

				function _createHiddenIframe(target, uri) {
					var iframe = document.createElement("iframe");
					iframe.src = uri;
					iframe.id = "hiddenIframe";
					iframe.style.display = "none";
					target.appendChild(iframe);

					return iframe;
				}

				function openUriWithHiddenFrame(uri, failCb, successCb) {

					var timeout = setTimeout(function () {
						failCb();
						handler.remove();
					}, 200);

					var iframe = document.querySelector("#hiddenIframe");
					if (!iframe) {
						iframe = _createHiddenIframe(document.body, "about:blank");
					}

					var handler = _registerEvent(window, "blur", onBlur);

					function onBlur() {
						clearTimeout(timeout);
						handler.remove();
						successCb();
					}

					iframe.contentWindow.location.href = uri;
				}

				function openUriWithTimeoutHack(uri, failCb, successCb) {

					var timeout = setTimeout(function () {
						failCb();
						handler.remove();
					}, 200);

					//handle page running in an iframe (blur must be registered with top level window)
					var target = window;
					while (target != target.parent) {
						target = target.parent;
					}

					var handler = _registerEvent(target, "blur", onBlur);

					function onBlur() {
						clearTimeout(timeout);
						handler.remove();
						successCb();
					}

					window.location = uri;
				}

				function openUriUsingFirefox(uri, failCb, successCb) {
					var iframe = document.querySelector("#hiddenIframe");

					if (!iframe) {
						iframe = _createHiddenIframe(document.body, "about:blank");
					}

					try {
						iframe.contentWindow.location.href = uri;
						successCb();
					} catch (e) {
						if (e.name == "NS_ERROR_UNKNOWN_PROTOCOL") {
							failCb();
						}
					}
				}

				function openUriUsingIEInOlderWindows(uri, failCb, successCb) {
					if (getInternetExplorerVersion() === 10) {
						openUriUsingIE10InWindows7(uri, failCb, successCb);
					} else if (getInternetExplorerVersion() === 9 || getInternetExplorerVersion() === 11) {
						openUriWithHiddenFrame(uri, failCb, successCb);
					} else {
						openUriInNewWindowHack(uri, failCb, successCb);
					}
				}

				function openUriUsingIE10InWindows7(uri, failCb, successCb) {
					var timeout = setTimeout(failCb, 1000);
					window.addEventListener("blur", function () {
						clearTimeout(timeout);
						successCb();
					});

					var iframe = document.querySelector("#hiddenIframe");
					if (!iframe) {
						iframe = _createHiddenIframe(document.body, "about:blank");
					}
					try {
						iframe.contentWindow.location.href = uri;
					} catch (e) {
						failCb();
						clearTimeout(timeout);
					}
				}

				function openUriInNewWindowHack(uri, failCb, successCb) {
					var myWindow = window.open('', '', 'width=0,height=0');

					myWindow.document.write("<iframe src='" + uri + "'></iframe>");

					setTimeout(function () {
						try {
							myWindow.location.href;
							myWindow.setTimeout("window.close()", 1000);
							successCb();
						} catch (e) {
							myWindow.close();
							failCb();
						}
					}, 500);
				}

				function openUriWithMsLaunchUri(uri, failCb, successCb) {
					navigator.msLaunchUri(uri,
						successCb,
						failCb
					);
				}

				function checkBrowser() {
					var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
					var ua = navigator.userAgent.toLowerCase();
					return {
						isWebKit: navigator.userAgent.match('WebKit'),
						isOpera: isOpera,
						isFirefox: typeof InstallTrigger !== 'undefined',
						isSafari: (~ua.indexOf('safari') && !~ua.indexOf('chrome')) || Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
						isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
						isChrome: !!window.chrome && !isOpera,
						isIE: /*@cc_on!@*/false || !!document.documentMode // At least IE6
					}
				}

				function getInternetExplorerVersion() {
					var rv = -1;
					if (navigator.appName === "Microsoft Internet Explorer") {
						var ua = navigator.userAgent;
						var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
						if (re.exec(ua) != null)
							rv = parseFloat(RegExp.$1);
					} else if (navigator.appName === "Netscape") {
						var ua = navigator.userAgent;
						var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
						if (re.exec(ua) != null) {
							rv = parseFloat(RegExp.$1);
						}
					}
					return rv;
				}

				module.exports = function (uri, failCb, successCb, unsupportedCb) {
					function failCallback() {
						failCb && failCb();
					}

					function successCallback() {
						successCb && successCb();
					}

					if (navigator.msLaunchUri) { //for IE and Edge in Win 8 and Win 10
						openUriWithMsLaunchUri(uri, failCb, successCb);
					} else {
						var browser = checkBrowser();

						if (browser.isFirefox) {
							openUriWithHiddenFrame(uri, failCallback, successCallback);
							// openUriUsingFirefox(uri, failCallback, successCallback);
						} else if (browser.isChrome || browser.isIOS) {
							openUriWithTimeoutHack(uri, failCallback, successCallback);
						} else if (browser.isIE) {
							openUriUsingIEInOlderWindows(uri, failCallback, successCallback);
						} else if (browser.isSafari) {
							openUriWithHiddenFrame(uri, failCallback, successCallback);
						} else {
							openUriWithHiddenFrame(uri, failCallback, successCallback);
							unsupportedCb();
							//not supported, implement please
						}
					}
				}

			}, {}]
		}, {}, [1])(1)
	});
	
	var webLink, appLink; 
	

	switch(msg_type){
		case "whatsapp":
			webLink = "https://web.whatsapp.com/send?phone=79384505171";
			appLink = "whatsapp://send?phone=79384505171&text="+encodeURIComponent('Здравствуйте, обращаюсь к вам через сайт, хочу обсудить вопрос здесь');
			break;
		case "telegram":
			webLink = "https://t.me/EdinCenter_bot";
			appLink = "tg://resolve?domain=EdinCenter_bot";
			break;
	}	

	if (msg_text){
		msg_text = encodeURIComponent(msg_text);
		
		switch(msg_type){
		case "whatsapp":
			webLink = webLink+'&text='+msg_text;
			appLink = appLink+'&text='+msg_text;
			break;
		/*case "telegram":
			webLink = "https://t.me/EdinCenter_bot";
			appLink = "tg://resolve?domain=EdinCenter_bot";
			break;*/
		}			
	} 	

	
	

	modal.append('<a href="'+ webLink +'" id="wwlink" target="_blank" style="display:none"><span></span></a>');
	var timer_click;
	var link = $('#wwlink');

	try{
		yaCounter28531226.reachGoal('messengers');
	} catch(e){}

	protocolCheck(appLink, function () {
		timer_click = setTimeout(function(){
			link.find('span').trigger("click");
		}, 1000);
	}, function () {
		document.location.href = appLink;
		if(timer_click != undefined){                
			timer_click.remove();
		}
	}, function () {
	   link.find('span').trigger("click")
	});
}

$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


function calltrack(){
	if (getCookie('utm_campaign') || getCookie('utm_source') || getCookie('utm_medium') ){
		var calltrack;

		if (getCookie('calltrack')){
			calltrack = JSON.parse(getCookie('calltrack'));
		}

		if(!calltrack)
			calltrack = 0;

		if (calltrack.city != window.cityID){
			$.ajax({
				url: '/api/geo/calltrack',
				method: 'get',
				data: {
					city: window.cityID,
				},
				success: function (data) {
					if (data['phone']){
						setCookie('calltrack', JSON.stringify(data), 15 / 24 / 60);
						$('a[href^="tel:'+window.basicPhone+'"]').each(function(i, el){

							$(this).attr('href','tel:'+phone_format(data['phone']));

							if ($(this).text().trim() == window.basicPhoneText)
								$(this).text(data['phone']);

						});

						$('.map-link[data-phone^="'+window.basicPhoneText+'"]').attr('data-phone', data['phone']);

					} else {
						setCookie('calltrack', '{"city":"0"}', 15 / 24 / 60);
					}
				},
				error: function(){
					setCookie('calltrack', '{"city":"0"}', 15 / 24 / 60);
				}
			
			});
		}
	}else{
		setCookie('calltrack', '{"city":"0"}', 60 / 24 / 60);
	}
};

document.addEventListener("DOMContentLoaded", function() {
	var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-bg"));
   
	if ("IntersectionObserver" in window) {
	  	let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
	   		entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.remove("lazy-bg");
					lazyBackgroundObserver.unobserve(entry.target);
				}
	    		});
		});
   
		lazyBackgrounds.forEach(function(lazyBackground) {
	    		lazyBackgroundObserver.observe(lazyBackground);
	 	});
	}

	var icons = [].slice.call(document.querySelectorAll(".icon:not(.load)"));

	if ("IntersectionObserver" in window) {
		let icons_obs = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("load");				
					icons_obs.unobserve(entry.target);
				}
			});
		}, {
			root: null,
			rootMargin: '0px 0px 50% 0px',
		});

		icons.forEach(function(icons) {
			icons_obs.observe(icons);
		});
	}
});


/**
 * Открывает модальное окно с сообщением об успешном завершении операции.
 * @param {string} modal_title - Заголовок модального окна.
 * @param {string} modal_text - Текст сообщения в модальном окне.
 * @param {string} modal_class - Дополнительные классы модального окна.
 * @param {string} modal_icon - Класс иконки для модального окна.
 * @param {string} modal_btn_text - Текст кнопки в модальном окне.
 */
function openSuccessModal(modal_title, modal_text, modal_class, modal_icon, modal_btn_text) {
    // Установка значений по умолчанию, если они не были предоставлены
    if (!modal_title)
        modal_title = "Заявка создана";
    if (!modal_text)
        modal_text = "Ожидайте, наш менеджер свяжется с вами очень быстро";
    if (!modal_icon)
        modal_icon = "icon-checkbox-circle";
    if (!modal_btn_text)
        modal_btn_text = "Хорошо";

    var currentURL = window.location.href;  // Получение текущего URL страницы

    // Проверка наличия фрагмента 'bankrotstvo-fizicheskih-lic' в URL
    if (currentURL.includes('bankrotstvo-fizicheskih-lic')) {
        modal_title = "Заявка создана";
        modal_text = "Ожидайте, эксперт по финансовым вопросам свяжется с вами очень быстро"; // Изменение текста для нужной страницы
        modal_btn_text = "Хорошо";
    }

	// Проверка наличия фрагмента 'besplatnoe-bankrotstvo' в URL
    if (currentURL.includes('besplatnoe-bankrotstvo')) {
        modal_title = "Заявка создана";
        modal_text = "Ожидайте, эксперт по финансовым вопросам свяжется с вами очень быстро"; // Изменение текста для нужной страницы
        modal_btn_text = "Хорошо";
    }

    // Проверка URL и изменение текста в зависимости от условий
    if (currentURL.includes('/arkhangelsk/') && currentURL.includes('bankrotstvo-fizicheskih-lic')) {
        modal_text = "Новый текст для этой страницы"; // Изменение текста для нужной страницы
    }

    // Добавление модального окна в тело документа
   
	// Проверка наличия фрагмента 'besplatnoe-bankrotstvo' в URL
	if (currentURL.includes('besplatnoe-bankrotstvo')) {
		$('body').append(`
        <div class="modal fade modern-modal success-modal mobile-fullscreen-modal mobile-fullscreen-with-menu `+modal_class+`" id="success_modal" tabindex="-1" role="dialog" aria-labelledby="succes_modal" aria-modal="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Закрыть"><span aria-hidden="true"></span></button>
                        <div class="mobile-menu-scroll">
                            <div class="d-flex align-items-center flex-column text-center">
                                <i class="icon `+modal_icon+` icon-centered"></i>
                                <div class="h2">`+modal_title+`</div>
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 360 360" fill="none">
									<path d="M180 330C97.155 330 30 262.845 30 180C30 97.155 97.155 30 180 30C262.845 30 330 97.155 330 180C330 262.845 262.845 330 180 330ZM165.045 240L271.095 133.935L249.885 112.725L165.045 197.58L122.61 155.145L101.4 176.355L165.045 240Z" fill="#21BE5C"></path>
								</svg>
								<p class="modal-phone_text" style="text-align: center;">Мы позвоним вам с этого номера:</p>
								<div id="did-container-2" style="width: 100%;" class="modal-phone_info"></div>
                                <p class="modal-phone_text" style="font-size: 16px; text-align: center;">Пока ждете звонка нашего юриста, заберите подарки - материалы, которые упростят вам списание долгов.</p>
                                <a class="btn btn-primary" style="background: #2AABEE;display: block;max-width: 70%;margin: 0 auto;" href="https://t.me/edcenter_bot?start=restart-4SozPgd4" target="_blank">Получить подарки <span style="margin-left: 10px;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M22.4589 2.07915C23.2947 1.75306 24.1586 2.48435 23.9751 3.36238L20.2269 21.2786C20.0519 22.1186 19.0651 22.4969 18.3733 21.9887L12.7151 17.8354L9.831 20.7803C9.32418 21.2971 8.45031 21.0867 8.23289 20.3977L6.15204 13.7922L0.574253 12.1447C-0.158429 11.9287 -0.200767 10.9095 0.509313 10.6314L22.4589 2.07915ZM19.7074 6.05456C19.9516 5.83853 19.6679 5.45741 19.3912 5.62963L7.35191 13.0962C7.14014 13.2275 7.04277 13.4859 7.11753 13.7244L8.75937 20.9341C8.79188 21.0443 8.94993 21.0287 8.9641 20.9144L9.33114 15.42C9.34522 15.2844 9.41016 15.1602 9.51187 15.0699L19.7074 6.05456Z" fill="white"></path>
									</svg></span>
								</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
	}else{
		$('body').append(`
        <div class="modal fade modern-modal success-modal mobile-fullscreen-modal mobile-fullscreen-with-menu `+modal_class+`" id="success_modal" tabindex="-1" role="dialog" aria-labelledby="succes_modal" aria-modal="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Закрыть"><span aria-hidden="true"></span></button>
                        <div class="mobile-menu-scroll">
                            <div class="d-flex align-items-center flex-column text-center">
                                <i class="icon `+modal_icon+` icon-centered"></i>
                                <div class="h2">`+modal_title+`</div>
                                <div class="mb-30">`+modal_text+`</div>
                                <button class="btn btn-primary" data-dismiss="modal">`+modal_btn_text+`</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
	}

    // Отображение модального окна
    $('#success_modal').modal('show');

    // Удаление модального окна после его закрытия
    $('#success_modal').on('hidden.bs.modal', function (e) {
        $('#success_modal').remove();
    });
}


const mob_break = 991;
const ten_years = 30 * 12 * 10;

var headerSize;
var buttons_show_height = 0;


function header_size(){
	if ($(window).width() > mob_break){
		headerSize = $('.top-header').outerHeight();

		if ($('.button-show-set').length > 0){
			setTimeout(function () {
				buttons_show_height = $('.button-show-set').offset().top - window.innerHeight;
			}, 200);
		}
	} else {
		headerSize = $('.mobile-nav-content').outerHeight();
	}
	$('html').css("--header-size", headerSize +"px");
}


var lastScrollTop = 0;
var startMenuView = 0;
var menuFixed = 0;

$(window).resize(function() {
		header_size();
});

$( document ).ready(function() {
	
	var mob_main_btn = $('.mobile-nav-content .main-btn');
	
	function mob_button_check(){
		var is_view;
		$('.fade-mobnav-btn').each(function(i, el){
			if ($(this).isInViewport())
				is_view = 1;
		});
		if (is_view)
			mob_main_btn.removeClass('active-btn');
		else
			mob_main_btn.addClass('active-btn');
	}	
	
	header_size();

	if ($(window).width() < mob_break){	
		mob_button_check();
	}

	if (iOS()){
		$('.mobile-nav').addClass('iOS');
	}
	
	$(window).scroll(function(event){
		if ($(window).width() > mob_break){
			var st = $(this).scrollTop();
			if (st < lastScrollTop){
				if (startMenuView == 0){
					startMenuView = 1;
					$('body').addClass('show-menu');	
				}

			} else {
				if (startMenuView == 1){
					startMenuView = 0;
					$('body').removeClass('show-menu');					
				}
			   
			}
			
			if (menuFixed == 0 && st > 300){
					menuFixed = 1;
					$('body').addClass('menu-fixed');
			}
			
			if (st == 0) {
				$('body').removeClass('menu-fixed');
				menuFixed = 0;
			}
			
			lastScrollTop = st;
		}else{
			mob_button_check();
		}
	});
	
	if ($('.desktop-bottom-buttons').length){
		if ($('.desktop-bottom-buttons').offset().top < 1500){
			$('.desktop-bottom-buttons').removeClass('show').addClass('static');
		}
	}

	// $(window).scroll(function(event){
	// 	if ($(window).width() > mob_break){
	// 		var st = $(this).scrollTop();
	// 		var sb = st + $(this).height();
	// 		var elem = $('.desktop-bottom-buttons');
	// 		var wrap_top =  $('.desktop-bottom-buttons-wrap').offset().top;
	// 		var show_height = 1000;
	// 		if (buttons_show_height > 0)
	// 			show_height = buttons_show_height;
			
	// 		if (st > show_height){
	// 			if (sb > wrap_top + 120){
	// 				elem.removeClass('show').addClass('static');
	// 			}
	// 			else if(sb < wrap_top){
	// 				elem.addClass('show').removeClass('static');
	// 			}
	// 		} else{
	// 			elem.removeClass('show');
	// 		}			
	// 	}
	// });

	if ($(window).width() < mob_break){
		$('.mobile-menu-content .mobile-menu-scroll').scroll(function(e){
			if ($(this).scrollTop() > 0){
				$(this).parent().addClass('scroll');
			}
		});

		var initialY, currentY, target;
		var active = false;

		$('.mobile-menu-content').on('touchstart', function(e){

			initialY = e.touches[0].clientY;

			if (e.target === this || $(e.target).hasClass('mobile-menu-header') || $(e.target).parent().hasClass('mobile-menu-header') ) {
				active = true;
				target = this;
			}
		});	

		$('.mobile-menu-content').on('touchmove', function(e){
			if (active) {
				//e.preventDefault();

				currentY = e.touches[0].clientY - initialY;

				if (currentY > 0)
					setTranslateY(currentY, target);

			}
		});


		$('.mobile-menu-content').on('touchend', function(e){
			if (active) {
				if (currentY > 30){
					initialY = 0;
					var menu_tab = $(this).parents('.mobile-menu-fixed');
			
					menu_tab.removeClass('show');
					setTimeout(function() {
						menu_tab.removeClass('enable');
					}, 200);
					
					$('.mobile-menu-bg').removeClass('show');
					$('body').removeClass('modal-open');
					$('html').removeClass('modal-open');
					$('.mob-menu-drop').removeClass('active');
					
					if (menu_tab.hasClass('show-form')){
						menu_tab.removeClass('show-form');
						menu_tab.find('.mobile-menu-form').removeClass('show');
					}

					if (menu_tab.find('.steps-modal-form').length > 0)
						clearSteps(menu_tab.find('.steps-modal-form'));
				}
				$(this).css('transform','translateY(0)');
			}

			active = false;
			target = null;
		});

		function setTranslateY(yPos, el) {
			el.style.transform = "translateY(" + yPos + "px)";
		}

	}
	
	if ($('.newsfeed-article-menu').length > 0 && $(window).width() > mob_break){
		var toc = "";
		var level = 1;
	 
		document.getElementById("contents").innerHTML =
		    document.getElementById("contents").innerHTML.replace(
			   /<h([\d])>([^<]+)<\/h([\d])>/gi,
			   function (str, openLevel, titleText, closeLevel) {
				  if (openLevel != closeLevel) {
					 return str;
				  }
	 
				  if (openLevel > level) {
					 toc += (new Array(openLevel - level + 1)).join("<ul>");
				  } else if (openLevel < level) {
					 toc += (new Array(level - openLevel + 1)).join("</ul>");
				  }
	 
				  level = parseInt(openLevel);
	 
				  var anchor = titleText.replace(/ /g, "_").hashCode();
				  toc += "<li><a class=\"toc-link\" data-header=\"#" + anchor + "\">" + titleText
					 + "</a></li>";
	 
				  return "<h" + openLevel + " id=\"" + anchor + "\"" + "class=\"article-header\">"+ titleText + "</h" + closeLevel + ">";
			   }
		    );
	 
		if (level && toc) {
		    toc += (new Array(level + 1)).join("</ul>");
		}
	 
		document.getElementById("toc").innerHTML = toc + document.getElementById("toc").innerHTML;

		if (toc != ''){
			$('.newsfeed-banner').addClass('mt-40');
		}

		$("body").on('click', '.toc-link', function (event) {
			event.preventDefault();
			var anc_offset = 15;
	
			if ($($(this).attr('data-header')).offset().top < window.scrollY && $(window).width() > mob_break){
				anc_offset = anc_offset + headerSize;
			}
	
			$('html, body').animate({
				scrollTop: $($(this).attr('data-header')).offset().top - anc_offset
			}, 500);
		});
	
		function article_header_check(){
			$('.article-header').each(function(i, el){
				if ($(this).offset().top - window.scrollY < 150 && $(this).offset().top > window.scrollY){
					$('.toc-link.active').removeClass('active');
					$('[data-header="#'+$(this).attr('id')+'"]').addClass('active');
					return true;
				}
			});
		}

		$(window).scroll(function(event){
			article_header_check();
		});

	};
	
	
	$('.modal').on('shown.bs.modal', function (e) {
		$('html').addClass('modal-open');
	})
	
	$('.modal').on('hide.bs.modal', function (e) {
		$('html').removeClass('modal-open');
	})
	
	
	$('.modal').on('show.bs.modal', function (e) {
		var mob_form = $('#'+$(this).attr('id')+'_mob');
		
		if (mob_form.length > 0){
			if ($(window).width() < mob_break) {
				e.preventDefault();
				var menu_tab = mob_form.parents('.mobile-menu-fixed');
				var menu_content = menu_tab.find('.mob-menu-content-wrap');
				var loader = menu_tab.find('.loading');
				
				loader.addClass('show');
			
				if (!menu_tab.hasClass('show')){
					menu_tab.addClass('show');
					menu_tab.parents('.mobile-nav-menus').find('.mobile-menu-bg').addClass('show');
				}
			
			
				setTimeout(function () {
					
					mob_form.addClass('show');
					menu_tab.addClass('show-form');
					
					loader.removeClass('show').addClass('transition');
					setTimeout(function () {
						loader.removeClass('transition');
					}, 200);
				}, 400);
					
			}
		}
	});

	
	$('.nav-item.dropdown').mouseleave(function() {
		var menuitem = $(this);
		menuitem.addClass( "open" );
		setTimeout(function(){
			menuitem.removeClass( "open" );
		}, 500);
	});

	$('.nav-item.dropdown').mouseenter(function() {
		$('.nav-item.dropdown').removeClass( "open" );
	});

	/*$('.mobile-menu-wrap .back:not([data-step])').on('click', function(e){
		var menu_tab = $(this).parents('.mobile-menu-fixed');
		var loader = menu_tab.find('.loading');
		
		loader.addClass('show');
		
		setTimeout(function () {
			current_step = menu_tab.find('.mobile-menu-form.show').find('.steps-wrap_step:not(.d-none)');
			if (current_step.index() > 0){
				current_step.addClass('d-none');
				current_step.prev().removeClass('d-none');
			} else {
				menu_tab.removeClass('show-form');
				menu_tab.find('.mobile-menu-form').removeClass('show');
			}
			
			loader.removeClass('show').addClass('transition');
			setTimeout(function () {
				loader.removeClass('transition');
			}, 200);
		}, 400);
		
	});*/
	
	
	$('.mob-menu-drop').on('click', function(e){
		e.preventDefault();
		var target = $($(this).data('target'));
		var navs = $('.mobile-nav-menus .mobile-menu-fixed').not(target);
		var navs_btns = $('.mob-menu-drop');
		var bg = $('.mobile-menu-bg');
		
		$(target).find('.mobile-menu-content').removeClass('scroll');

		if (target.hasClass('show')){
			bg.removeClass('show');
			target.removeClass('show');
			setTimeout(function() {
				target.removeClass('enable');
			}, 200);
			$(this).removeClass('active');
			$('body').removeClass('modal-open');
			$('html').removeClass('modal-open');
		} else{
			if (!bg.hasClass('show'))
				bg.addClass('show');

			navs.removeClass('show');
			setTimeout(function() {
				navs.removeClass('enable');
			}, 200);

			target.addClass('enable');
			setTimeout(function() {
				target.addClass('show');
			}, 10);
			
			navs_btns.removeClass('active');
			$(this).addClass('active');
			$('body').addClass('modal-open');
			$('html').addClass('modal-open');
		}

		$('.modal.show').modal('hide');
		
	});
	
	$('.mobile-nav-menus').on('click','.mobile-menu-fixed.show', function(e){
		if(e.target.className == 'mobile-menu-wrap'){
			$(this).removeClass('show');
			setTimeout(function() {
				$(this).removeClass('enable');
			}, 200);
			$('.mobile-menu-bg').removeClass('show');
			$('body').removeClass('modal-open');
			$('html').removeClass('modal-open');
			$('.mob-menu-drop').removeClass('active');
			
			if ($(this).hasClass('show-form')){
				$(this).removeClass('show-form');
				$(this).find('.mobile-menu-form').removeClass('show');
			}
			
			if ($(this).find('.steps-modal-form').length > 0)
				clearSteps($(this).find('.steps-modal-form'));
			
		}
	});
	 
	$('.mobile-menu-fixed .close').on('click', function(e){
		var menu_tab = $(this).parents('.mobile-menu-fixed');
		
		menu_tab.removeClass('show');
		setTimeout(function() {
			menu_tab.removeClass('enable');
		}, 200);

		$('.mobile-menu-bg').removeClass('show');
		$('body').removeClass('modal-open');
		$('html').removeClass('modal-open');
		$('.mob-menu-drop').removeClass('active');
		
		if (menu_tab.hasClass('show-form')){
			menu_tab.removeClass('show-form');
			menu_tab.find('.mobile-menu-form').removeClass('show');
		}

		if (menu_tab.find('.steps-modal-form').length > 0)
				clearSteps(menu_tab.find('.steps-modal-form'));
	});

	$('.js-office-grafic').on('click', function(){
		$(this).next().removeClass('d-none').slideToggle();
		$(this).toggleClass('office-grafic-active');
	});

	$('.menu-mobile-toggle:not(.disabled)').on('click', function(e){
		$(this).next().slideToggle();
		$(this).toggleClass('show');
	});

	$('.menu-mobile-select[data-change]').on('click', 'li', function(e){
		var parent_select = $(this).parents('.menu-mobile-select');
		var select_text = parent_select.find('.menu-mobile-toggle');
		var select_list =  parent_select.find('ul');
		var target = $(parent_select.data('change'));
		var value = $(this).data('value');

		parent_select.find('li').removeClass('select');
		$(this).addClass('select');
		select_text.html($(this).html());
		target.val(value);
		select_list.slideToggle();
		select_text.removeClass('show');

		parent_select.trigger('select-change');
	});
		
		
	$(function(){
		var requiredCheckboxes = $('.checkbox-group :checkbox[required]');
		requiredCheckboxes.change(function(){
		    if(requiredCheckboxes.is(':checked')) {
			   requiredCheckboxes.removeAttr('required');
		    } else {
			   requiredCheckboxes.attr('required', 'required');
		    }
		});
	 });


	$('.step-office').on('step_load', function(e){
		office_update_date($(this));
		office_update_time($(this));
	});
		
	$('.menu-mobile-select.office_address_select').on('select-change', function(e){
		office_update_date($(this).parents('.steps-wrap_step'));
		office_update_time($(this).parents('.steps-wrap_step'));
	});
	
	$('.menu-mobile-select.office_date_select').on('select-change', function(e){
		office_update_time($(this).parents('.steps-wrap_step'));
	});
	
	
	function office_update_date(step) {
		var this_date = new Date();
		this_date.setHours(this_date.getHours() + 1);
	
		if (this_date.getMinutes() >= 30)
			this_date.setHours(this_date.getHours() + 1);
	
		var selected_date = new Date(step.find('#office_date').val());
		var selected_office_time = step.find('.office_address_select .select').data('office-time');
		var i = 0;
	
		var select_new_date_output = '';
	
		if (this_date.getHours() >= selected_office_time[this_date.getDay()][1].split(':', 2)[0])
			i = 1;
	
		counter = 0;
		while (counter < 3) {
			let loop_date = new Date();
			let current_day_name = '';
	
			loop_date.setDate(this_date.getDate() + i);
			loop_date.setHours(0, 0, 0);
	
			console.log('Loop Date:', loop_date.toLocaleDateString()); // Логирование значения loop_date
	
			if (loop_date.getDay() > 0) {
				switch (i) {
					case 0:
						current_day_name = 'Сегодня';
						break;
					case 1:
						current_day_name = 'Завтра';
						break;
					case 2:
						current_day_name = 'Послезавтра';
						break;
				}
	
				if (select_new_date_output == '') {
					select_new_date_output += '<li class="select d-flex justify-content-between"';
				} else {
					select_new_date_output += '<li class="d-flex justify-content-between"';
				}
	
				loop_date_value = loop_date.getFullYear() + "-" + ("0" + (loop_date.getMonth() + 1)).slice(-2) + "-" + ("0" + loop_date.getDate()).slice(-2);
	
				select_new_date_output += ' data-value="' + loop_date_value + '">' + loop_date.toLocaleDateString();
				if (current_day_name != '')
					select_new_date_output += '<span class="gray-3 bd-2 regular">' + current_day_name + '</span>';
				select_new_date_output += '</li>';
	
				counter++;
			}
			i++;
		}
		select_new_date_output += '<li data-value="1970-01-01">Другой день <span class="d-block gray-3 bd-2 regular">для записи с вами свяжется оператор</span></li>';
	
		step.find('.office_date_select ul').html(select_new_date_output);
		step.find('.office_date_select .menu-mobile-toggle').html(step.find('.office_date_select li.select').html());
		step.find('#office_date').val(step.find('.office_date_select .select').data('value'));
	
		console.log('Select New Date Output:', select_new_date_output); // Логирование готовой строки select_new_date_output
	}
	


	/** Давай сохраним номер **/
	/** Давай сохраним номер **/
	// Получаем все инпуты на странице с атрибутом name="lead[phone]"
	const phoneInputs = document.querySelectorAll('input[name="lead[phone]"]');

	// Обходим все найденные инпуты
	phoneInputs.forEach(function(input) {
	// Добавляем обработчик события input для каждого инпута
	input.addEventListener('input', function() {
		const phoneNumber = input.value; // Получаем значение из инпута
		const storedPhoneNumber = sessionStorage.getItem('storedPhoneNumber'); // Получаем сохраненный номер из sessionStorage
		
		// Проверяем, отличается ли введенный номер от сохраненного 
		if (phoneNumber !== storedPhoneNumber) {
		// Если номер отличается, сохраняем новый номер в sessionStorage
		sessionStorage.setItem('storedPhoneNumber', phoneNumber);
		///('Номер телефона был обновлен и сохранен в sessionStorage:', phoneNumber);
		}
	});
	
	// Устанавливаем начальное значение инпута из sessionStorage, если оно есть
	const storedPhoneNumber = sessionStorage.getItem('storedPhoneNumber');
	if (storedPhoneNumber) {
		input.value = storedPhoneNumber;
		//console.log('Найден сохраненный номер телефона в sessionStorage:', storedPhoneNumber);
	}
	});

	/** Давай сохраним номер **/
	/** Давай сохраним номер **/




	function office_update_time(step) {
		var this_date = new Date();
		this_date.setHours(this_date.getHours() + 1);
	
		if (this_date.getMinutes() >= 30)
			this_date.setHours(this_date.getHours() + 1);
	
		var selected_date = new Date(step.find('.office_date_select .select').data('value'));
		var selected_office_time = step.find('.office_address_select .select').data('office-time');
		var office_start_hours, office_end_hours;
		var select_new_date = [];
		var time_selector = step.find('.office_time_select');
	
		console.log('This Date:', this_date.toLocaleString()); // Логирование значения this_date
		console.log('Selected Date:', selected_date.toLocaleString()); // Логирование значения selected_date
	
		if (selected_date.getYear() == 70) {
			time_selector.addClass("d-none");
		} else {
			time_selector.removeClass("d-none");
		}
	
		if (this_date.toDateString() != selected_date.toDateString()) {
			this_date = selected_date;
			this_date.setHours(0, 0, 0);
		}
	
		if (selected_office_time != null) {
	
			office_start_hours = selected_office_time[this_date.getDay()][0].split(':', 2)[0];
			office_end_hours = selected_office_time[this_date.getDay()][1].split(':', 2)[0];
	
			console.log('Office Start Hours:', office_start_hours); // Логирование значения office_start_hours
			console.log('Office End Hours:', office_end_hours); // Логирование значения office_end_hours
	
			if (office_end_hours > this_date.getHours()) {
				if (office_start_hours > this_date.getHours()) {
					for (var i = office_start_hours; i <= office_end_hours; i++) {
						select_new_date.push(i + ':00');
					}
				} else {
					for (var i = this_date.getHours(); i <= office_end_hours; i++) {
						select_new_date.push(i + ':00');
					}
				}
			}
		}
	
		console.log('Select New Date:', select_new_date); // Логирование значения select_new_date
	
		if (select_new_date.length > 0) {
			let select_new_time_output = '';
			select_new_date.forEach((item) => {
				if (select_new_time_output == '') {
					select_new_time_output += '<li class="select" data-value="' + item + '">' + item + '</li>';
				} else {
					select_new_time_output += '<li data-value="' + item + '">' + item + '</li>';
				}
	
			});
	
			step.find('.office_time_select ul').html(select_new_time_output);
			step.find('.office_time_select .menu-mobile-toggle').html(step.find('.office_time_select li.select').html());
			step.find('#office_time').val(step.find('.office_time_select .select').data('value'));
		}
	}
	
	var sms_send_interval = 0;

	$('.step-office-sms').on('step_load', function(e) {
	// Получаем сохраненный номер из sessionStorage
	const storedPhoneNumber = sessionStorage.getItem('storedPhoneNumber');
	// Получаем номер телефона из инпута
	var phone = $(this).closest('form').find('[name="lead[phone]"]').val();
	//console.log('Номер в input:', phone);
	// Если номер телефона из инпута отсутствует, используем сохраненный номер из sessionStorage
	if (!phone && storedPhoneNumber) {
		phone = storedPhoneNumber;
		//console.log('Номера в input нет, поэтому взяли с хранилища:', phone);
	}


    var code_input = $(this).find('[name="sms-code"]');
    var error_msg = $(this).find('.error-msg');
    var sending = 0;
    var succes_step = $(this).closest('.steps-wrap').find('.step-office-confirm');
    var sms_resend = $(this).find('.sms-resend');

    //console.log('Телефон:', phone); // Логирование значения переменной phone

    if (phone.length > 0) {

        $(this).find('.sms-phone').text(phone);

        if (sms_send_interval == 0) {
            $.ajax({
                url: '/api/lead/sms',
                method: 'post',
                data: {
                    'phone': phone
                },
                beforeSend: function() {
                    console.log('Отправка SMS-запроса...');
                },
                success: function(data) {
                    console.log('SMS отправлено успешно...');
                    office_resend_sms(sms_resend, phone);
                },
                error: function(xhr, status, error) {
                    console.error('Error occurred while sending initial SMS.'); // Логирование ошибки AJAX запроса
                    console.error('XHR:', xhr); // Логирование XHR объекта для подробной информации
                    console.error('Status:', status); // Логирование статуса ошибки
                    console.error('Error:', error); // Логирование текста ошибки
                    error_msg.removeClass('d-none');
                    error_msg.text('Произошла ошибка, попробуйте позже');
                }
            });
        } else {
            console.log('sms_send_interval is not 0'); // Логирование, если sms_send_interval не равен 0
        }
    } else {
        console.log('Phone length is not greater than 0'); // Логирование, если длина номера телефона не больше 0
    }
	
		$(code_input).unbind();
		$(code_input).on('input', function() {
			console.log('Code input length:', $(this).val().length); // Логирование длины введенного кода
			if ($(this).val().length == 4) {
	
				code_input.prop('disabled', true);
	
				if (!sending) {
					sending = 1;
					$.ajax({
						url: '/api/lead/sms',
						method: 'post',
						data: {
							'phone': phone,
							'code': $(this).val()
						},
						success: function(data) {
							let noNextStep = 0;
							if (code_input.data('form-sender')) {
								code_input.closest('form').find('.form-sender').val(code_input.data('form-sender'));
								if (code_input.data('form-sender') == 'office_lead_new') {
									noNextStep = 1;
								}
							} else {
								code_input.closest('form').find('.form-sender').val('office_lead');
							}
	
							code_input.closest('form').submit();
							if (!noNextStep) {
								changeStep(succes_step);
							}
	
							sending = 0;
							error_msg.addClass('d-none');
							code_input.val('');
							code_input.prop('disabled', false);
						},
						error: function(err) {
							sending = 0;
							error_msg.removeClass('d-none');
							error_msg.text(err.responseJSON.message);
							code_input.val('');
							code_input.prop('disabled', false);
							console.error('Error occurred while sending SMS code.'); // Логирование ошибки AJAX запроса
						}
					});
	
				}
			}
		});
	});


	function office_resend_sms(target, phone){
		const sms_send_timeout = 60;
		var sms_resend_sec = $(target).find('.sms-resend-seconds');
		var sms_resend_text = $(target).find('.sms-resend-text');
		var counter = sms_send_timeout;
	
		sms_resend_text.text('Отправить повторно, через');
		sms_resend_sec.text(' '+counter+' сек');

		if (sms_send_interval == 0){
			sms_send_interval = setInterval(function() {
				counter--;
				sms_resend_sec.text(' '+counter+' сек');
				if (counter == 0) {
					clearInterval(sms_send_interval);
					sms_send_interval = 0;
					sms_resend_sec.text('');
					sms_resend_text.html('<a href="#">Отправить SMS повторно</a>');
				}
			}, 1000);
		}

		$(target).on('click', 'a', function(e){
			e.preventDefault();
			$.ajax({
				url: '/api/lead/sms',
				method: 'post',
				data: {
					'phone':phone
				},
				success: function (data) {
					office_resend_sms(target, phone);
				},
				error: function(){
					error_msg.removeClass('d-none');
					error_msg.text('Произошла ошибка, попробуйте позже');
				}
			});
		})

	}

	$('.step-office').on('click', '[data-step="office-sms"]', function(e){
		var step = $(this).parents('.step-office');
		
		window.office_form_office = step.find('.office_address_select .select').data();
		window.office_form_date = step.find('#office_date').val();
		window.office_form_time = step.find('#office_time').val();		
	})
	
	
	$('.step-office-confirm').on('step_load', function(e){
		var this_date = new Date();
		var office = window.office_form_office;
		var date = window.office_form_date;
		var time = window.office_form_time;
		var diff = new Date(date +' '+ time) - this_date;
		
		if (diff > 0){
			let minutes  = Math.floor(diff / (1000 * 60));
			let hours = Math.floor(minutes / 60);
			
			minutes = Math.floor(minutes % 60);

			if (hours < 24){
				$(this).find('.office-time-left').text('Осталось '+(hours ? hours+' ч. ':'')+ minutes + ' мин.' );
			}
			
			let days = Math.floor((new Date(date) - this_date.setHours(0, 0, 0)) / (1000 * 60 * 60 * 24));

			switch (days){
					case 0:
						day_name = 'Сегодня';
						break;
					case 1:
						day_name = 'Завтра';
						break;
					case 2:
						day_name = 'Послезавтра';
						break;	
					default:
						day_name = new Date(date).toLocaleDateString();
				}
			
		} else {
			day_name = new Date(date).toLocaleDateString();
		}
		
		
		$(this).find('.office-confirm-info .time').text(time);
		$(this).find('.office-confirm-info .date').text(day_name);
		
		$(this).find('.office-confirm-address-info .address span').text('г.	'+office['city']+', '+office['value']);
		$(this).find('.office-confirm-address-info .phone span').html('<a href="tel:'+office['phone']+'" class="phone phone-shown gray-1">'+office['phone']+'</a>');
		
		if (this_date.getDay()==0){
			$(this).find('.office-confirm-address-info .worktime span').text('Сегодня закрыто');
		} else{
			$(this).find('.office-confirm-address-info .worktime span').text('Открыто до '+ office['officeTime'][this_date.getDay()][1]);
		}
		
	});
	
	
	$('.quiz-select:not(.more)').on('click', function(e){
		var data = JSON.parse($(this).attr('data-quiz'));
		var step = $(this).attr('data-step');
		var title = $(this).text();
		if (data)
			$(this).parents('form').find('.step-'+step).attr('data-quiz', JSON.stringify(data)).attr('data-title', title);
	});
	
	$('.quiz-select.more').on('click', function(e){
		$(this).parent().find('.quiz-select-hidden').removeClass('quiz-select-hidden');
		$(this).addClass('d-none'); 
	});
	
	$('.step-quiz').on('step_load', function(e){
		var data = JSON.parse($(this).attr('data-quiz'));
		var quiz_step = $(this).attr('quiz-step');
		var title = $(this).attr('data-title');
		var quiz_input = $(this).find('.quiz-data');
		var progress = $(this).find('.quiz-progress');
		var max_step = Object.keys(data).length;
		var quiz_question = $(this).find('.quiz-question');
		var quiz_answers = $(this).find('.quiz-answers');
		var html_answers = '';
		var html_progress = '';
		var next_step = $(this).attr('data-next-step')
				
		if (!quiz_step){
			$(this).attr('quiz-step', 1);
			quiz_step = 1;
			quiz_input.val('');
			//$(this).find('.debt-data').val('');
		}
		
		if (quiz_step == 1){
			$(this).find('.first-info').fadeIn(300);
		}else{
			$(this).find('.first-info').fadeOut(500);
		}
		
		if (title)
			$(this).find('.mobile-menu-header .st-1').text(title);
		
		
		
		for (var i = 1; i <= max_step; i++) {
			if (quiz_step >= i){
				html_progress+='<span class="active"></span>';
			} else {
				html_progress+='<span></span>';
			}
		}
		
		progress.fadeOut(500, function(){
			$(this).html(html_progress);
			$(this).fadeIn(300);
		});
		
		$(this).find('.quiz-block').fadeOut(500, function(){
			quiz_question.text(data[quiz_step].question);
			
			$.each(data[quiz_step].answers, function( index, value ) {
				if (quiz_step == max_step){
					html_answers += '<div class="quiz-answer-wrap"><div class="quiz-answer" data-step="'+next_step+'">'+value+'</div></div>'; 
				} else {
					html_answers += '<div class="quiz-answer-wrap"><div class="quiz-answer">'+value+'</div></div>'; 
				}
			});
			
			quiz_answers.html(html_answers);
			$(this).fadeIn(300);
		})
	});
	
	$('.step-quiz').on('click', '.quiz-answer', function(e){

		var value = $(this).text();
		var quiz_step = $(this).parents('.step-quiz');
		var quiz_input = quiz_step.find('.quiz-data');
		var question = quiz_step.find('.quiz-question').text();

		$(this).addClass('active');

		quiz_input.val( quiz_input.val() + question +': ' + value +';');
		
		/*if (question == "Сумма ваших долгов"){
			quiz_step.find('.debt-data').val(value);
		}*/

		if (!$(this).attr('data-step')){
			
			if (quiz_step.attr('quiz-step')){
				quiz_step.attr('quiz-step', parseInt(quiz_step.attr('quiz-step')) + 1);
			} else{
				quiz_step.attr('quiz-step', 2);
			}
			
			quiz_step.trigger('step_load');
		} else {
			quiz_step.attr('quiz-step', '');
		}
	})
	
	$('.step-quiz').on('click', '.quiz-reset', function(e){
		$(this).parents('.step-quiz').attr('quiz-step', '');
	});
	
	
	function clearSteps(selector){
		var wrap = $(selector).find('.steps-wrap');
		var progress_bar = wrap.find('.modal-progress-bar span');
		var step_class = '.steps-wrap_step';
		
		setTimeout(function () {
			wrap.find(step_class).each(function () {
				$(this).addClass('d-none');
			});
			
			wrap.find(step_class).first().removeClass('d-none');
			progress_bar.css('width', wrap.find(step_class).first().data('progress') + '%');	
		}, 200);
		
	}

	function clearStepsData(selector){
		var wrap = $(selector).closest('.steps-wrap');

		wrap.find('input').each(function () {
			$(this).val();
		});

		wrap.find('input[type="checkbox"]:checked').each(function () {
			$(this).prop('checked',false);
		});

		wrap.find('input[type="radio"]:checked').each(function () {
			$(this).prop('checked',false);
		});
	}

	function changeStep(target_step){
		var wrap = target_step.closest('.steps-wrap');
		var step_class = '.steps-wrap_step';

		if (target_step) {
			var loader = wrap.find('.loading');
			loader.addClass('show');

			target_step.trigger('step_load');

			setTimeout(function () {
				wrap.find(step_class).each(function () {
					$(this).addClass('d-none');
				});
				target_step.removeClass('d-none');
				loader.removeClass('show').addClass('transition');
				setTimeout(function () {
					loader.removeClass('transition');
				}, 200);
			}, 400);
		}
	}

	function morph(n, f1, f2, f5) {
		n = Math.abs(parseInt(n)) % 100;
		if (n>10 && n<20) return f5;
		n = n % 10;
		if (n>1 && n<5) return f2;
		if (n==1) return f1;
		return f5;
	}

	function lastConfirmLead(form){
		let date = form.find('input[name="lead[date]"]:checked').val();
		let time = form.find('input[name="lead[time]"]:checked').val();
		let monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
		let textForMe = "Вы записаны на консультацию \nв {{ site.name }}\nДата: ";

		if(date && time){
			let arrDate = date.split('-');
			let arrTime = time.split(':');
			let curDate = new Date(arrDate[0],(arrDate[1]-1),arrDate[2],arrTime[0],arrTime[1]);
			let nowDate = new Date();
			let orderDate = arrDate[2] + ' ' + monthNames[arrDate[1]-1] + ' в ' + time;

			let _second = 1000;
			let _minute = _second * 60;
			let _hour = _minute * 60;
			let _day = _hour * 24;

			let timestamp = curDate - nowDate;

			if(timestamp > 0) {
				let days = Math.floor(timestamp / _day);
				let hours = Math.floor((timestamp % _day) / _hour);
				let minutes = Math.floor((timestamp % _hour) / _minute);
				//let seconds = Math.floor((timestamp % _minute) / _second);

				form.find('input[name="lead[timestampout]"]').val(timestamp);
				$('.js-confirm-date').empty().text(orderDate);

				let outTimer = "Осталось: ";
				if (days) {
					outTimer += days + ' ' + morph(days, "день", "дня", "дней");
				}
				if (hours) {
					outTimer += ' ' + hours + ' ' + morph(hours, "час", "часа", "часов");
				}
				outTimer += ' ' + minutes + ' мин';
				$('.js-confirm-date-timer').empty().text(outTimer);
				textForMe += arrDate[2] + ' ' + monthNames[arrDate[1]-1] + ' ' + arrDate[0] + '\n' +
					"Время: " + time + "\n" +
					"Адрес: " + $('.js-confirm-address').text() + "\n" +
					"Телефон: " + $('.js-confirm-phone').text() + "\n";

				$('.js-text-for-me-whatsapp').attr('href',"https://wa.me/" + form.find('input[name="lead[phone]"]').val().replace(/\D+/g,'') + "?text=" + encodeURIComponent(textForMe));
				$('.js-text-for-me-tg').attr('href',"https://telegram.me/share/url?url=https://offotdolgov.ru/&text=" + encodeURIComponent(textForMe));
				$('.js-text-for-me-viber').attr('href',"viber://forward?text=" + encodeURIComponent(textForMe));
				$('.js-text-for-me-vk').attr('href',"https://vk.com/share.php?url=https://offotdolgov.ru/&title=" + encodeURIComponent(textForMe));
				$('.js-text-for-me-ok').attr('href',"https://connect.ok.ru/offer?url=https%3A%2F%2Foffotdolgov.ru%2F&description=" + encodeURIComponent(textForMe));
			}

			$('.js-address-confirm').empty().text(form.find('input[name="lead[address]"]').val());
			$('.js-date-confirm').empty().text(orderDate);
		}
	}

	function  openSubmodal(obj){
		let modal = obj.data('submodal');
		$('#'+modal).fadeIn();
	}

	function closeLoader(form, step, submodal = false){
		let wrap = form.find('.steps-wrap');
		var loader = wrap.find('.loading');

		if(submodal){
			setTimeout(function () {
				loader.removeClass('show').addClass('transition');
				setTimeout(function () {
					loader.removeClass('transition');
				}, 200);
			}, 400);

			$('#'+step).fadeIn();
		} else {
			let step_class = '.steps-wrap_step';
			let target_step = wrap.find('.step-' + step);

			setTimeout(function () {
				wrap.find(step_class).each(function () {
					$(this).addClass('d-none');
				});
				target_step.removeClass('d-none');
				loader.removeClass('show').addClass('transition');
				setTimeout(function () {
					loader.removeClass('transition');
					if ($('.office-grafic-slider').length > 0) {
						if ($('.office-grafic-slider').hasClass('slick-initialized')) {
							$('.office-grafic-slider')[0].slick.refresh();
						} else {
							$('.office-grafic-slider').slick();
						}
					}
					wrap.removeAttr('data-this_next_active');
				}, 200);
			}, 400);
		}
	}

	$('.steps-wrap').on('click', '[data-step]', function (e) {
		if ($(this).prop("tagName") != 'INPUT'){
			e.preventDefault();
		}
		var step_class = '.steps-wrap_step';
		var step = $(this).closest(step_class);
		var wrap = step.closest('.steps-wrap');
		var progress_bar = wrap.find('.modal-progress-bar span');
		var step_data = $(this).data('step');
		var step_stop = $(this).data('stop');
		var report = true;
		var lock = false;

		if ($(this).data('clear') == true){
			clearStepsData($(this));
		}

		wrap.find('.sub-modal').fadeOut();

		if(step_data!="prev"){
			step.find('[required]').each(function () {
				$(this)[0].checkValidity();
				
				if($(this).attr('type') == 'tel' && $(this).val().length < 16) {
					lock = true;
					$(this).removeClass('is-valid').addClass('is-invalid');
					if (report){
						$(this)[0].setCustomValidity('Введите номер телефона');
						$(this)[0].reportValidity();
						report = false;
					}
				} else {
					$(this)[0].setCustomValidity('');
				}

				if (!$(this)[0].validity.valid) {
					lock = true;
					$(this).removeClass('is-valid').addClass('is-invalid');
					if (report) {
						$(this)[0].reportValidity();
						report = false;
					}
				} else {
					$(this).removeClass('is-invalid').addClass('is-valid');
				}

			});
		}

		if (step_data=="next"){
			target_step = step.next(step_class);
		} else if(step_data=="prev"){
			target_step = step.prev(step_class);
			lock = false;
		} else if(step_data=='radio'){
			let radio_val = step.find('input[type="radio"]:checked').val();
			if (radio_val == 'whatsapp' || radio_val == 'telegram'){
				target_step = wrap.find('.step-1');
				messenger_check(radio_val, 'Я оставил вопрос на вашем сайте, хочу продолжить общение здесь', wrap);
				$(this).parents('.modal').modal('hide');
			} else {
				target_step = wrap.find('.step-' + radio_val);
			}
		} else if(step_data=='office-confirm' && step.find('#office_date').val() == '1970-01-01'){
			target_step = wrap.find('.step-office-confirm-phone');	
		} else if(step_data!=''){
			target_step = wrap.find('.step-' + step_data);
		}

		if (step.length > 0 && !lock && target_step) {
			var loader = wrap.find('.loading');
			loader.addClass('show');
			
			if (target_step.data('progress')) 
				progress_bar.css('width', target_step.data('progress') + '%');
			
			if(step_data=="prev" && target_step.find('.checkbox-btn').length > 0){
				target_step.find('.checkbox-btn input').each(function(i, el){
					$(el).prop('checked', false);
				});
			}	

			target_step.trigger('step_load');

			if($(this).data('nobg-modal')){
				$(this).closest('.modal-body').addClass('no-bg-image');
			} else {
				$(this).closest('.modal-body').removeClass('no-bg-image');
			}

			if($(this).data('modal-width')){
				$(this).closest('.modal-dialog').css('max-width',$(this).data('modal-width'));
			}

			if(step_stop){
				wrap.attr('data-this_next_active',step_data);
			} else {
				setTimeout(function () {
					wrap.find(step_class).each(function () {
						$(this).addClass('d-none');
					});
					target_step.removeClass('d-none');
					loader.removeClass('show').addClass('transition');
					setTimeout(function () {

						loader.removeClass('transition');
						if (wrap.find('.office-grafic-slider').length > 0) {
							//$('.office-grafic-slider').slick();
							wrap.find('.office-grafic-slider')[0].slick.refresh();
						}
						let smsinput = document.querySelector('.js-sms-code').focus();
					}, 200);
				}, 400);
			}

		}
	});           
	
	$('[data-content-fill]').click(function(e){
		var target = $($(this).data('target'));
		target.find('textarea').val($(this).text());
	});
	
	
	$('body').on('click', '[data-messenger]', function(e){
		e.preventDefault();
		let type = $(this).data('messenger');
		$(this).closest('.modal').modal('hide');
		createMsgModal(type, false);
		let preload = new Image();
		preload.src="/images/modal-bg-"+type+".png";
	});

	function createMsgModal(type, msg_user_text){
		var msg_type, msg_text;
		
		switch (type){
			case 'whatsapp':
				msg_type = type;
				msg_text = 'WhatsApp';
				break;
			case 'telegram':
				msg_type = type;
				msg_text = 'Telegram';
				break;
			default:
				return;
		}
		
		$('body').append('<div class="modal fade modal-messenger '+ msg_type +'" id="messenger-modal" data-msg-type="'+ msg_type +'" data-msg-text="'+ msg_user_text +'" tabindex="-1" role="dialog" aria-labelledby="messenger-modal" aria-modal="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button><div class="h5 modal-title">Вы выбрали '+ msg_text +'</div></div><div class="modal-body"><div class="content"><p>Для продолжения укажите ваш телефон, на котором установлен '+msg_text+'</p><p>Ваш телефон:</p></div><form action="/api/lead" data-form-type="messenger" method="post"><input type="tel" name="lead[phone]" class="form-control" placeholder="+7 999 999-99-99" data-validation="phone" required autocomplete="off" maxlength="16"><input type="hidden" name="lead[type]" value="'+ msg_type +'"><button type="submit" class="btn btn-block btn-primary">Перейти в '+msg_text+' <i class="fab fa-'+msg_type+'"></i></button></form></div></div></div></div>');
		
		$('#messenger-modal button[type="submit"]').addClass('disabled');
		
		$('#messenger-modal').modal('show');
		
		$('#messenger-modal').on('shown.bs.modal', function (e) {
			$(this).find('input[type="tel"]').focus();
			
			$(this).find('input[type="tel"]').on('propertychange input', function (e) {
				if ($(this).val().length >= 16){
					$('#messenger-modal button[type="submit"]').removeClass('disabled');
				}
				else{
					$('#messenger-modal button[type="submit"]').addClass('disabled');
				}
			});
			
			$('#messenger-modal button[type="submit"]').click(function(e){
				if ($(this).hasClass('disabled')){
					e.preventDefault();
					$('#messenger-modal input[type="tel"]')[0].setCustomValidity('Введите номер телефона');
					$('#messenger-modal input[type="tel"]')[0].reportValidity();
				}
			});
		});
		
		
		
		$('#messenger-modal').on('hidden.bs.modal', function (e) {
			$('#messenger-modal').remove();
		});
		
		
		
		$('#messenger-modal').submit(function( event ) {
			var msg_type = $(this).data('msg-type');
			var msg_text = $(this).data('msg-text');
			
			messenger_check(msg_type, msg_text, $(this));
			
			var close_timer = setTimeout(function(){
				$('#messenger-modal').modal('hide');    
			}, 5000);
		});
	};

	if ($('.textarea-help-btns').length){
		$('.textarea-help-btns').each(function(i) {
			
			var wrap = $(this).find('.help-btns-wrap');
			
			if ($('.textarea-help-btns textarea').val().length > 0){
				hide_help_btns();
			}
				
			
			$('.textarea-help-btns .help-btn').on('click', function (e) {
				$(this).closest('.textarea-help-btns').find('textarea').val($(this).text());
				hide_help_btns()
			});

			$('.textarea-help-btns textarea').on('propertychange input paste change', function (e) {
				if($(this).val().length > 0)
					hide_help_btns();
				else
					show_help_btns();
			});

 
			function hide_help_btns(){
				if (!wrap.hasClass('d-none')){
					wrap.addClass('hide');
					setTimeout(function () {
						wrap.addClass('d-none').removeClass('hide');
					}, 500);
				}
			}

			function show_help_btns(){
				if (wrap.hasClass('d-none')){
					wrap.addClass('hide').removeClass('d-none');
					setTimeout(function () {
						wrap.removeClass('hide');
					}, 500);
				}
			}
		});
	}

	$('form').on('input', '[required]', function (e) {
		if ($(this).hasClass('is-invalid')){
			$(this).removeClass('is-invalid');
			$(this)[0].setCustomValidity('');
		}
	});


	$('[data-action="close-modal"]').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.modal').modal('hide');
	});

	$('.js-close-reset-lead').on('click', function () {

		$(this).closest('form').find('.sub-modal').fadeOut();

		let func = () => {
			$(this).closest('.modal').modal('hide');
			clearSteps($(this).closest('form'));
			//$('.office-time-box').removeAttr('style');
			$(this).find('.js-btn-first').removeAttr('data-submodal').attr('data-step', 'office-sms');
			$(this).find('.js-btn-last').removeAttr('data-submodal').attr('data-step', 'office-new');
		};

		let seyHi = func.bind(this);

		setTimeout(function(){
			seyHi();
		}, 400);
	});

	$('[data-send="send"]').on('click', function (e) {
		var step_class = '.steps-wrap_step';
		var step = $(this).closest(step_class);
		var report = true;
		var lock = false;

		var form = $(this).closest('form');
		/*
		switch (form.find('[type="radio"]:checked').val()){		
			case 'whatsapp':
				//e.preventDefault();	
				$(this).closest('.modal').modal('hide');
				clearSteps(form);
				createMsgModal('whatsapp', 'Я оставил вопрос на вашем сайте, хочу продолжить общение здесь');
				break;
			
			case 'telegram':
				//e.preventDefault();
				$(this).closest('.modal').modal('hide');
				clearSteps(form);	
				createMsgModal('telegram', 'Я оставил вопрос на вашем сайте, хочу продолжить общение здесь');			
				break;
		}*/
		
		step.find('[required]').each(function () {
			if($(this).attr('type') == 'tel' && $(this).val().length < 16) {
				lock = true;
				$(this).removeClass('is-valid').addClass('is-invalid');
				if (report){
					$(this)[0].setCustomValidity('Введите номер телефона');
					$(this)[0].reportValidity();
					report = false;
				}
			} else {
				$(this)[0].setCustomValidity('');
			}
			
			if (!$(this)[0].validity.valid) {
				lock = true;
				$(this).removeClass('is-valid').addClass('is-invalid');
				if (report){
					$(this)[0].reportValidity();
					report = false;
				}
			} else {
				$(this).removeClass('is-invalid').addClass('is-valid');
			}
		});
		
		if (!lock){
			form.find('.form-sender').val($(this).attr('name'));
			form.submit();
		}
		
		if (!$(this).data('step') && !$(this).data('stop')){
			if (step.find('.is-invalid').length === 0) {
				$(this).closest('.modal').modal('hide');
			}
		}
	});


	$('[data-action="open-modal"]').on('click', function (e) {
		e.preventDefault();
		if ($(this).closest('.modal').length)
			$(this).closest('.modal').modal('hide');
		if ($(this).data('target')){
			$($(this).data('target')).modal('show');
		}
		clearSteps($(this).closest('.modal'));
	})

	$('#modern_lead_modalform').on('hidden.bs.modal', function(e){
		$(this).find('form')[0].reset();
		clearSteps($(this));
	});

	$('.js-close-help-item').on('click', function(e){
		$('.js-close-help-item-past').val($(this).text());
	});

	$('body').on('submit', 'form:not(.searchForm):not(.special)', function (e) {//Отправка лидов
		e.preventDefault();
		var form = $(this);
		let formSender = form.find('.form-sender').val();

		if (form.hasClass('main-quiz-form')){
			var main_quiz_data = '';
			$(form).find('.main-quiz-content-question').each(function(index, elem){
				if ($(elem).data('question')){
					main_quiz_data += $(elem).data('question') +': ';

					$(elem).find('.checkbox-btn input:checked').each(function(i, el){
						if (i > 0) {
							main_quiz_data += ', ';
						}
						main_quiz_data += $(el).val();
					});

					main_quiz_data += ';';
				}
			});
			$(form).find('[name="lead[quiz]"]').val(main_quiz_data);
		}
		
		/*if (form.find('[name="lead[type]"]:checked')[0].value == 'office' && !form.find('[name="lead[date]"]')[0].value){
			return;
		}*/

		let daysOfWeek = [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота',
		];

		let monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

		phone_input = form.find('[type="tel"]');

		if (phone_input.val().length < 16 && !form.hasClass('main-quiz-form_new')){
			
			phone_input.removeClass('is-valid').addClass('is-invalid');
			phone_input[0].setCustomValidity('Введите номер телефона!');
			phone_input[0].reportValidity();
			return false;
		}

		if (phone_input.val())
			$('#gift_phone_number').val(phone_input.val());

		var formType = form.attr('data-form-type') || 'lead';

		if (form.parents('#contact-form').length > 0) {
			return;
		}

		if (form.attr('data-sending') === false) {
			return;
		}

		form.attr('data-sending', true);

		// grecaptcha.ready(function () { // по готовности скриптов recaptcha
		// 	grecaptcha.execute(window.rekey, {
		// 		action: 'sendform' // этот параметр не имеет значения
		// 	}).then(function (token) {
		// 		window.retoken = token;

		// 		var data = form.serialize();
		// 		var cityId = 0;
		// 		var cityName = '';

		// 		if(!form.find('input[name="lead[city_id]"]').val()) {
		// 			if (getCookie('edin_center_geo') && form.find('[name="lead[city_id]"]').length == 0) {
		// 				var geo = JSON.parse(decodeURIComponent(getCookie('edin_center_geo')));
		// 				cityId = geo.id || 999;
		// 				if (cityId == 999) {
		// 					cityName = geo.name;
		// 				}
		// 			}

		// 			if (cityId) {
		// 				data += '&lead%5Bcity_id%5D=' + cityId;
		// 			}
		// 			if (cityName) {
		// 				data += '&lead%5Bcity_text%5D=' + cityName;
		// 			}
		// 		}

		// 		if(formSender == 'cancel-lead'){
		// 			data += '&lead%5Bclose%5D=1';
		// 		}

		// 		if (window.usluga) {
		// 			data += '&lead%5Busluga%5D=' + window.usluga;
		// 		}

		// 		if ($_GET['utm_source']) {
		// 			data += '&lead%5Butm_source%5D=' + encodeURIComponent($_GET['utm_source']);
		// 		} else if(getCookie('utm_source')){
		// 			data += '&lead%5Butm_source%5D=' + getCookie('utm_source');
		// 		}

		// 		if ($_GET['utm_medium']) {
		// 			data += '&lead%5Butm_medium%5D=' + encodeURIComponent($_GET['utm_medium']);
		// 		} else if(getCookie('utm_medium')){
		// 			data += '&lead%5Butm_medium%5D=' + getCookie('utm_medium');
		// 		}

		// 		if ($_GET['utm_campaign']) {
		// 			data += '&lead%5Butm_campaign%5D=' + encodeURIComponent($_GET['utm_campaign']);
		// 		} else if(getCookie('utm_campaign')){
		// 			data += '&lead%5Butm_campaign%5D=' + getCookie('utm_campaign');
		// 		}

		// 		if ($_GET['utm_term']) {
		// 			data += '&lead%5Butm_term%5D=' + encodeURIComponent($_GET['utm_term']);
		// 		} else if(getCookie('utm_term')){
		// 			data += '&lead%5Butm_term%5D=' + getCookie('utm_term');
		// 		}

		// 		if ($_GET['utm_content']) {
		// 			data += '&lead%5Butm_content%5D=' + encodeURIComponent($_GET['utm_content']);
		// 		} else if(getCookie('utm_content')){
		// 			data += '&lead%5Butm_content%5D=' + getCookie('utm_content');
		// 		}

		// 		if ($_GET['ref']) {
		// 			data += '&lead%5Bref%5D=' + encodeURIComponent($_GET['ref']);
		// 		} else if(sessionStorage.getItem('ref')){
		// 			data += '&lead%5Bref%5D=' + sessionStorage.getItem('ref');
		// 		}

		// 		if (window.retoken) {
		// 			data += '&retoken=' + window.retoken;
		// 		}

		// 		var url = form.attr('action');
		// 		var method = form.attr('method');
		// 		var button = form.find('[type=submit]');
		// 		button.attr('disabled', true);
				
		// 		//console.log("2");
		// 		//console.log(cityId);

		// 		if(window.debugMetka!=true){
		// 			try {gtag_report_conversion();} catch (e) {}//Отправка данных в гугл о отправке лида
		// 		}
		// 		$.ajax({
		// 			url: url,
		// 			data: data,
		// 			method: method,
		// 			dataType: 'json',
		// 			success: function success(data) {

		// 				if(form.find('.form_zapis').val()){
		// 					let formPop = $('.new-lead-modal-form').find('form');
		// 					if ($('.office-grafic-slider').hasClass('slick-initialized')) {
		// 						$('.office-grafic-slider')[0].slick.unslick();
		// 					}
		// 					if (formPop.find('input[name="lead[lead]"]').length) {//такое может быть если сделали шаг назад кпримеру для смены номера тел
		// 						formPop.find('input[name="lead[lead]"]').val(data.id);
		// 					} else {
		// 						var inputID = document.createElement('input');
		// 						inputID.type = "hidden";
		// 						inputID.setAttribute("name", "lead[lead]");
		// 						inputID.setAttribute("value", data.id);
		// 						formPop.prepend(inputID);
		// 					}

		// 					if (data.check && data.days != null) {
		// 						let sliderDays = ''; //блоки с датой на запись
		// 						let dataTime = ''; //блоки с временем на запись
		// 						let cnt = 0;
		// 						if (data.days.status) {
		// 							for (day in data.days.dates) {
		// 								let dateObj = new Date(day.slice(0, 4), (day.slice(4, 6) - 1), day.slice(-2));
		// 								let dateFull = day.slice(0, 4) + '-' + day.slice(4, 6) + '-' + day.slice(-2);
		// 								let dateShort = day.slice(-2) + '.' + day.slice(4, 6);

		// 								dataTime += '<div class="office-time' + (cnt ? ' d-none' : '') + '" data-date="' + dateFull + '">';

		// 								sliderDays += '<div class="office-grafic-slider-item">';
		// 								sliderDays += '<label class="modal-office-date-item d-flex flex-column align-items-center">';
		// 								sliderDays += '<input name="lead[date]" type="radio" value="' + dateFull + '" required data-notsavetostate="true">';
		// 								sliderDays += '<b>' + dateShort + '</b><span>' + daysOfWeek[(dateObj.getDay())] + '</span></label></div>';

		// 								let arr = Object.entries(data.days.dates[day]);
		// 								arr.forEach(time => {
		// 									dataTime += '<label class="office-time-item"><input name="lead[time]" type="radio" value="' + time[0] + '" data-notsavetostate="true"><b>' + time[0] + '</b><span>свободно</span></label>';
		// 								});
		// 								dataTime += '</div>';

		// 								cnt++;
		// 							}
		// 							sliderDays += '<div className="office-grafic-slider-item">';
		// 							sliderDays += '<label class="modal-office-date-item d-flex flex-column align-items-center modal-office-date-another">';
		// 							sliderDays += '<input name="lead[date]" type="radio" value="another" required data-notsavetostate="true"><span>Другой<br/>день</span></label></div>';

		// 							$('.office-grafic-slider').empty().append(sliderDays);
		// 							$('.office-time-container').empty().append(dataTime);

		// 							//closeLoader(formPop, formPop.find('.steps-wrap').data('this_next_active'));
		// 						}
		// 						if (data.phone) {
		// 							var storedPhoneNumber = localStorage.getItem('UserState["lead[phone]"]');
		// 							//console.log(storedPhoneNumber);
		// 							$('.js-new-lead-phone').val(storedPhoneNumber ? phoneFormat(storedPhoneNumber) : phoneFormat(data.phone));
		// 							// Теперь, когда у нас есть data.id, отправляем данные
		// 							// $(document).on('click', '.js-main-modal-show', function(e) {
		// 							// 	$.ajax({
		// 							// 		url: 'https://crm.edin-center.ru/api/lead/client_action', // URL для отправки запроса
		// 							// 		method: 'POST',
		// 							// 		data: {
		// 							// 			lead_id: data.id, // Используем ID, полученный из данных
		// 							// 			type: 'form_meet'
		// 							// 		},
		// 							// 		success: function(response) {
		// 							// 			// Обработка успешного ответа
		// 							// 			console.log('Данные успешно отправлены', response);
		// 							// 		},
		// 							// 		error: function(xhr, status, error) {
		// 							// 			// Обработка ошибки
		// 							// 			console.error('Ошибка при отправке данных', error);
		// 							// 		}
		// 							// 	});
		// 							// });
		// 						}
		// 					} else {
		// 						//console.log("Нет дней для записи");
		// 						changeStep(formPop.find('.step-error'));
		// 					}
		// 				}
		// 				if(formSender == 'office_lead_new'){
		// 					if(data.date == 'another') {
		// 						//страбатывает, когда уже записали и перезаписываем на другой день
		// 						$('.js-modal-header-step').removeClass('d-none');
		// 						$('.js-btn-first').addClass('d-none').removeAttr('data-submodal').attr('data-step', 'office-sms');
		// 						$('.js-modal-header-created').addClass('d-none');
		// 						$('.js-btn-last').removeClass('d-none').removeAttr('data-submodal').attr('data-step', 'office-new');
		// 					} else {
		// 						//конечный шаг записи по времени, если приходит id записи, то норм
		// 						if (data.id) {
		// 							lastConfirmLead(form);

		// 							if (form.find('input[name="lead[meet]"]').length) {//такое может быть при перезаписи
		// 								form.find('input[name="lead[meet]"]').val(data.id);
		// 							} else {
		// 								var inputID = document.createElement('input');
		// 								inputID.type = "hidden";
		// 								inputID.setAttribute("name", "lead[meet]");
		// 								inputID.setAttribute("value", data.id);
		// 								form.prepend(inputID);
		// 							}
		// 							let timestampout = +form.find('input[name="lead[timestampout]"]').val();

		// 							if (timestampout) {
		// 								let expires = new Date(new Date().getTime() + timestampout);
		// 								let arrLead = {
		// 									'lead_id': form.find('input[name="lead[lead]"]').val(),
		// 									'meet_id': data.id,
		// 									'address': form.find('input[name="lead[address]"]').val(),
		// 									'date': form.find('input[name="lead[date]"]:checked').val(),
		// 									'time': form.find('input[name="lead[time]"]:checked').val()
		// 								}

		// 								if (getCookie("leadOrder")) {
		// 									clearCookieItem("leadOrder");
		// 								}
		// 								document.cookie = "leadOrder=" + encodeURIComponent(JSON.stringify(arrLead)) + "; domain=" + window.location.hostname + ";  path=/; expires=" + expires.toUTCString();
		// 							}

		// 							$('.js-modal-header-step').addClass('d-none');
		// 							$('.js-modal-header-created').removeClass('d-none');

		// 							changeStep(form.find('.step-office-new-confirm'));

		// 							$('.js-btn-first').addClass('d-none'); //убираем первую кнопку что ведет на смс
		// 							$('.js-btn-last').removeClass('d-none'); //включаем кнопку что исключает смс и отправляет форму
		// 						} else {
		// 							changeStep(form.find('.step-error'));
		// 						}
		// 						if ($('.office-gallery-slider').length > 0) {
		// 							setTimeout(function () {
		// 								$('.office-gallery-slider').slick();
		// 							}, 700);
		// 						}
		// 					}
		// 				}

		// 				if(formSender == 'cancel-lead'){
		// 					form.find('input[name="form_sender"]').val('');
		// 					form.find('input[name="lead[meet]"]').val('');
		// 					form.find('input[name="lead[timestampout]"]').val('');

		// 					if(getCookie("leadOrder")){
		// 						clearCookieItem("leadOrder");
		// 					}

		// 					closeLoader(form, 'cancel-confirmed', true);
		// 					$('.js-modal-header-created').addClass('d-none');
		// 					$('.js-modal-header-step').removeClass('d-none');

		// 					$('.btn-tab-active2').removeClass('btn-tab-active2');
		// 					$('.modal-tab2').each(function(i,v){ $(this).find('.btn-tab2').eq(0).addClass('btn-tab-active2'); });

		// 					$('.btn-tab-active').removeClass('btn-tab-active');
		// 					$('.modal-tab').each(function(i,v){ $(this).find('.btn-tab').eq(0).addClass('btn-tab-active'); });

		// 					$('.modal-office-date-item-active').removeClass('modal-office-date-item-active');
		// 					$('.office-time-item-active').removeClass('office-time-item-active');
		// 					$('.modal-office-date-item input').prop('checked',false);
		// 					$('.office-time-item input').prop('checked',false);
		// 					$('.modal-tab-content').removeClass('modal-tab-content-active');
		// 					$('.modal-tab-content-box').each(function(i,v){ $(this).find('.modal-tab-content').eq(0).addClass('modal-tab-content-active'); });

		// 					lastConfirmLead(form);
		// 				}
		// 				if (form.hasClass('steps-modal-form')){
							
		// 				} else {
		// 					form[0].reset();
		// 				}

		// 					form.removeAttr('data-sending');
		// 					button.attr('disabled', false);
		// 					form.find('.is-valid').removeClass('is-valid');
		// 					form.find('.is-invalid').removeClass('is-invalid');
						
		// 				if (form.attr('close-on-send')){
		// 					form.parents('.modal').modal('hide');
		// 				}

		// 				if (form.attr('modal-confirm')){
		// 					openSuccessModal(form.attr('confirm-title'), form.attr('confirm-text'), form.attr('confirm-class'), form.attr('confirm-icon'), form.attr('confirm-button'));
		// 				}
						
		// 				if(formSender != 'main_lead_new' &&  formSender != 'office_lead_new' &&  formSender != 'cancel-lead') {
		// 					try {
		// 						yaCounter28531226.reachGoal('lead');
		// 						var _tmr = window._tmr || (window._tmr = []);

		// 						_tmr.push({
		// 							id: "2926245",
		// 							type: "reachGoal",
		// 							goal: "lead"
		// 						});

		// 					} catch (e) {// do nothing

		// 					}
		// 				}

		// 				// Проверяем, была ли цель уже достигнута для текущего посетителя
		// 				if (document.cookie.indexOf('goalReached=true') === -1 && formSender != 'main_lead_new' && formSender != 'office_lead_new' && formSender != 'cancel-lead') {
		// 					try {
		// 						// Код для достижения цели
		// 						yaCounter28531226.reachGoal('lead');

		// 						var _tmr = window._tmr || (window._tmr = []);

		// 						_tmr.push({
		// 							id: "2926245",
		// 							type: "reachGoal",
		// 							goal: "lead"
		// 						});

		// 						fbq('track', 'Lead');

		// 						ga('gtag_UA_65328618_2.send', 'event', 'lead', 'lead');

		// 						// Устанавливаем куку, чтобы помнить, что цель уже достигнута
		// 						document.cookie = 'goalReached=true; expires=Fri, 31 Dec 2035 23:59:59 GMT; path=/';
		// 						console.log(document.cookie);
		// 					} catch (e) {
		// 						// Обработка ошибок
		// 						console.error('Ошибка при выполнении цели:', e);
		// 					}
		// 				}

		// 				//Экспресс Анализ: Сохраняем объект
		// 				if ($('#express-analysis').length > 0 && form.is('#express-analysis')) {
		// 					// Получение значения из скрытого поля
		// 					var expressSuccessInput = document.querySelector('input[name="express-success"]');
		// 					var expressSuccessValue = expressSuccessInput ? expressSuccessInput.value : '';
				
		// 					// Получение номера телефона
		// 					var phoneInput = document.querySelector('input[name="lead[phone]"]');

		// 					var userEnteredPhone = phoneInput ? phoneInput.value : '';
				
		// 					// Формируем новые данные для сохранения
		// 					var expressAnalysisFormData = {
		// 						formSubmitted: true, // Форма отправлена
		// 						serverPhoneNumber: data.phone, // Номер телефона из ответа сервера
		// 						userPhoneNumber: userEnteredPhone, // Номер телефона, введенный пользователем
		// 						expressSuccess: expressSuccessValue, // Значение из скрытого поля
		// 						leadid: data.id
		// 					};
				
		// 					// Перезаписываем данные в локальное хранилище
		// 					localStorage.setItem('expressAnalysisForm', JSON.stringify(expressAnalysisFormData));

		// 					// Перенаправляем на страницу /ekspress-analiz
		// 					window.location.href = '/ekspress-analiz';
							
		// 				}

		// 				if ($('#express-analysis-dp').length > 0 && form.is('#express-analysis-dp')) {
		// 					// Получение значения из скрытого поля
		// 					var expressSuccessInput = document.querySelector('input[name="express-success"]');
		// 					var expressSuccessValue = expressSuccessInput ? expressSuccessInput.value : '';
				
		// 					// Получение номера телефона
		// 					var phoneInput = document.querySelector('input[name="lead[phone]"]');

		// 					var userEnteredPhone = phoneInput ? phoneInput.value : '';
				
		// 					// Формируем новые данные для сохранения
		// 					var expressAnalysisFormData = {
		// 						formSubmitted: true, // Форма отправлена
		// 						serverPhoneNumber: data.phone, // Номер телефона из ответа сервера
		// 						userPhoneNumber: userEnteredPhone, // Номер телефона, введенный пользователем
		// 						expressSuccess: expressSuccessValue, // Значение из скрытого поля
		// 						leadid: data.id
		// 					};
				
		// 					// Перезаписываем данные в локальное хранилище
		// 					localStorage.setItem('expressAnalysisForm', JSON.stringify(expressAnalysisFormData));

		// 					// Перенаправляем на страницу /ekspress-analiz
		// 					window.location.href = '/ekspress-analiz';
							
		// 				}
		// 				//Экспресс Анализ: Сохраняем объект

		// 				// Функция для форматирования номера телефона для вывода в модальном окне
		// 				function formatPhoneNumber(phoneNumber) {
		// 					var cleaned = ('' + phoneNumber).replace(/\D/g, '');
		// 					var match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
		// 					if (match) {
		// 						return '+' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4] + '-' + match[5];
		// 					}
		// 					return null;
		// 				}

		// 				//Получаем номер телефона с которого будем звонить
		// 				// if (data.id) {
		// 				// 	// Формируем URL для второго запроса
		// 				// 	var nextDidUrl = 'https://crm.edin-center.ru/api/lead/next_did?lead_id=' + data.id;
					
		// 				// 	// Отправляем второй запрос
		// 				// 	$.ajax({
		// 				// 		url: nextDidUrl,
		// 				// 		method: 'GET',
		// 				// 		dataType: 'json',
		// 				// 		success: function(nextDidData) {
		// 				// 			// Проверяем, есть ли DID в ответе
		// 				// 			if (nextDidData.did) {
		// 				// 				var formattedNumber = formatPhoneNumber(nextDidData.did);

		// 				// 				$('#did-container').text(formattedNumber);
		// 				// 				$('#did-container-2').text(formattedNumber);
		// 				// 			}
		// 				// 		},
		// 				// 		error: function(err) {
		// 				// 			//console.error('Ошибка запроса DID:', err);
		// 				// 		}
		// 				// 	});
		// 				// }
		// 				//Получаем номер телефона с которого будем звонить

		// 			},
		// 			error: function error(_error) {

		// 				// Проверяем, содержит ли ответ данные о перенаправлении и является ли форма формой "Экспресс-Анализ"
		// 				if ($('#express-analysis-dp').length > 0 && _error.responseJSON && _error.responseJSON.redirect) {
		// 					window.location.href = _error.responseJSON.redirect;
		// 				} else {
		// 					form.parents('.modal').modal('hide');

		// 					error_data = _error.responseJSON;
	
		// 					error_msg = error_data?.errors?.message ? error_data.errors.message : error_data.message;
		// 					error_msg = error_msg ? error_msg : 'Попробуйте отправить заявку позднее';
		// 					openSuccessModal('Произошла ошибка', error_msg, 'success-error', 'icon-emote-excl', null);
							
		// 					form.removeAttr('data-sending');
		// 					button.attr('disabled', false);
	
		// 					if (form.hasClass('main-quiz-form') || form.hasClass('main-quiz-form_new')){
		// 						clearSteps(form);
		// 					}

		// 				}
		// 			}
		// 		});
		// 	});
		// });

	});
	
	$('#modern_lead_modalform').on('show.bs.modal', function (e) {
		if (window.usluga == 9){
			$(this).find('.quiz-select').trigger('click');
		}
	})

	$('.mobile-nav-wrap a.main-btn').on('click', function(e){
		calltrack();
		$('body').addClass('show-all-phones');
		sessionStorage.setItem("phone-shown", 1);
	});

	$('a[href^="tel:"]:not(.btn)').on('click', function(e){
		
		if(!$(this).hasClass('phone-shown') && !$('body').hasClass('show-all-phones')){

			e.preventDefault();

			calltrack();

			$(this).addClass('phone-shown');
			$('body').addClass('show-all-phones');
			sessionStorage.setItem("phone-shown", 1);
		}else{

			if ($(window).width() >= 1201){
				try{
					yaCounter28531226.reachGoal('phone');
				} catch(err){console.log(err)}
			}else{
				try{
					yaCounter28531226.reachGoal('mob');
				} catch(err){console.log(err)}
			}
		}
	});

	$('body').on('click','.ajax_city_list a, .office_partners .another_list a, .officesList a', function(){
		eraseCookie('calltrack');
		sessionStorage.removeItem('phone-shown');
	})

	$('.mobile-menu-links .mob-menu-main-form-btn').on('click', function(e){
		yaCounter28531226.reachGoal('msg_footer');
	});
	
	function hide_tooltip(target){
		if (target.hasClass('show'))
			target.fadeOut().removeClass('show');
	}
	
	var logo_tooltip = $('.logo-dp-tooltip');
	if(logo_tooltip.length > 0){
		$('.logo-dp-check').on('mouseenter', function(e){
			logo_tooltip.addClass('show').fadeIn();
		});
		$('.logo-dp-check').on('click', function(e){
			if (!logo_tooltip.hasClass('show')){
				logo_tooltip.addClass('show').fadeIn();
			}else{
				hide_tooltip(logo_tooltip);
			}
		});
		
		logo_tooltip.on('mouseleave', function(e){
			hide_tooltip(logo_tooltip);
		});
		$('header').on('mouseleave', function(e){
			hide_tooltip(logo_tooltip);
		});
		$('body').on('touchstart', function(e){
			if (!$('.logo-dp-check').is(e.target) && $('.logo-dp-check').has(e.target).length === 0){
				if (!logo_tooltip.is(e.target) && logo_tooltip.has(e.target).length === 0){
					hide_tooltip(logo_tooltip);
				}
			}
		});
	}
	
	var adress_tooltip = $('.adress-info-tooltip');
	if(adress_tooltip.length > 0){
		$('.adress-info-wrap').on('click', function(e){
			if(adress_tooltip.has(e.target).length === 0){
				if (!adress_tooltip.hasClass('show')){
					adress_tooltip.addClass('show').fadeIn();
				}else{
					hide_tooltip(adress_tooltip)
				}
			}
		});
		adress_tooltip.on('mouseleave', function(e){
			hide_tooltip(adress_tooltip);
		});
		$('header').on('mouseleave', function(e){
			hide_tooltip(adress_tooltip);
		});
		$('body').on('touchstart', function(e){
			if (!$('.adress-info-wrap').is(e.target) && $('.adress-info-wrap').has(e.target).length === 0){
				if (!adress_tooltip.is(e.target) && adress_tooltip.has(e.target).length === 0){
					hide_tooltip(adress_tooltip);
				}
			}
		});
	}
	
	$('.tooltip-activate').on('click', function(e){
		var generic_tooltip = $(this).find('.generic-tooltip');

		if(generic_tooltip.has(e.target).length === 0){

			if ($(window).width() <= mob_break && generic_tooltip.hasClass('generic-tooltip-mob-modal')){
				var generic_tooltip_content = generic_tooltip.html();

				$('body').append('<div class="modal mobile-fullscreen-modal mobile-fullscreen-with-menu tooltip-modal fade" id="tooltip-modal" tabindex="-1" role="dialog" aria-labelledby="tooltip-modal" aria-modal="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button></div><div class="modal-body"><div class="content pr-75 pl-20">'+generic_tooltip_content+'</div></div></div></div>');
		
				$('#tooltip-modal').modal("show");

				$('#tooltip-modal').on('hidden.bs.modal', function (e) {
					$('#tooltip-modal').remove();
				});


			}else{
				if (generic_tooltip.find('.close').length == 0)
					generic_tooltip.append('<button type="button" class="close tooltip-close" aria-label="Закрыть"><span aria-hidden="true"></span></button>');
				
				generic_tooltip.on('click', '.close', function(){
					hide_tooltip(generic_tooltip);
				})

				if (!generic_tooltip.hasClass('show')){
					generic_tooltip.addClass('show').fadeIn();
				}else{
					hide_tooltip(generic_tooltip)
				}
			}
		}
	});

	(function () {
		var ttEl = document.querySelector(".anim-placeholder");  
		if (document.body.contains(ttEl)) {
		     ttText = ttEl.placeholder;	
		     ttEl.placeholder = '';

			ttArr = ttText.split('');

		     var loopTyping = function () {
				if (ttArr.length > 0) {
					ttEl.placeholder += ttArr.shift();
				} else {
					setTimeout(function () {
						ttEl.placeholder = '';
						ttArr = ttText.split('');
						loopTyping();
					}, 2000)
					return false;
				};
				timer = setTimeout(loopTyping, 50);
			};

			loopTyping();
		}
	 })();

	$(document).on('change','.modal-office-date-item input',function() {
		$(this).closest('.office-grafic-slider').find('.modal-office-date-item-active').removeClass('modal-office-date-item-active');
		$(this).closest('.modal-office-date-item').addClass('modal-office-date-item-active');
		if ($(this).val() == 'another') {
			$('.office-time-box').fadeOut();
			$('.office-time-box input[name=order-time]').prop('checked', false);
			$('.office-time-box .office-time-item-active').removeClass('office-time-item-active');
			$('.js-btn-first').removeAttr('data-step').attr('data-submodal', 'order-callback');
			$('.js-btn-last').removeAttr('data-step').attr('data-submodal', 'order-callback');
		} else if ($('.office-time-box').is(':hidden')) {
			$('.office-time-box').fadeIn();
			$('.js-btn-first').removeAttr('data-submodal').attr('data-step', 'office-sms');
			$('.js-btn-last').removeAttr('data-submodal').attr('data-step', 'office-new');
		}
		if($('[data-date="' + $(this).val() + '"]').hasClass('d-none')) {
			$('.office-time-container .office-time').addClass('d-none').find('input[name="lead[time]"]').removeAttr('required');
			$('.office-time-container .office-time-item').removeClass('office-time-item-active').find('input').prop('checked', false);
			$('[data-date="' + $(this).val() + '"]').removeClass('d-none').find('input[name="lead[time]"]').attr('required', true);
		}
		//lastConfirmLead($(this).closest('form'));
	});

	$(document).on('click', '[data-submodal]', function(e){
		e.preventDefault();
		openSubmodal($(this));
	});

	$(document).on('click', '.sub-modal', function(e){
		$(this).fadeOut();
	});

	$(document).on('click', '.sub-modal-content', function(e){
		e.preventDefault();
		e.stopPropagation();
	});

	$('.btn-tab').on('click', function(e){
		let parent = $(this).parent();
		let next = $(this).parent().next();
		let i = $(this).index();
		parent.find('.btn-tab-active').removeClass('btn-tab-active');
		$(this).addClass('btn-tab-active');
		next.find('.modal-tab-content-active').removeClass('modal-tab-content-active');
		next.find('.modal-tab-content').eq(i).addClass('modal-tab-content-active');
		if(i == 2){
			$('.modal-review-slider')[0].slick.refresh();
		}
	});

	$('.btn-tab2').on('click', function(e){
		let parent = $(this).closest('.box-tabs');
		let tabs = $(this).parent();
		let content = parent.find('.modal-tab-content-box');
		let i = $(this).index();
		tabs.find('.btn-tab-active2').removeClass('btn-tab-active2');
		$(this).addClass('btn-tab-active2');
		content.find('.modal-tab-content-active').removeClass('modal-tab-content-active');
		content.find('.modal-tab-content').eq(i).addClass('modal-tab-content-active');
	});

	$(document).on('change','.office-time-item input',function(){
		$(this).closest('.office-time').find('.office-time-item-active').removeClass('office-time-item-active');
		$(this).closest('.office-time-item').addClass('office-time-item-active');
		//lastConfirmLead($(this).closest('form'));
	});

	$(document).on('click','.js-main-modal-show',function(e){
		e.preventDefault();
		let lock = false;
		let report = true;
		let form = $(this).closest('form');

		$(this).closest('.steps-wrap_step').find('[required]').each(function () {
			$(this)[0].checkValidity();

			if (!$(this)[0].validity.valid) {
				lock = true;
				$(this).removeClass('is-valid').addClass('is-invalid');
				if (report){
					$(this)[0].reportValidity();
					report = false;
				}
			} else {
				$(this).removeClass('is-invalid').addClass('is-valid');
			}
		});
		if(!lock){
			$('.js-new-lead-question').val($('.js-question-lead').val());
			let phoneNumber = form.find('[name="lead[phone]"]').val();
			
			// Проверяем, есть ли значение в .js-new-lead-phone
			if (!phoneNumber) {
				// Если нет, пытаемся получить номер телефона из локального хранилища
				phoneNumber = localStorage.getItem('UserState["lead[phone]"]');
			}
			console.log(phoneNumber);
			
			$('.js-new-lead-phone').val(phoneNumber);
			$('.new-lead-modal-form').modal('show');
/*
			$('.js-new-lead-question').val($('.js-question-lead').val());
			$('.js-new-lead-phone').val(form.find('[name="lead[phone]"]').val());
			$('.new-lead-modal-form').modal('show');*/
		}
	});

	$('.js-modal').on('shown.bs.modal', function(event) {
		if($(this).hasClass('new-lead-modal-form')) {
			if ($('.office-grafic-slider').length > 0) {
				if ($('.office-grafic-slider').hasClass('slick-initialized')) {
					$('.office-grafic-slider')[0].slick.refresh();
				} else {
					$('.office-grafic-slider').slick();
				}
			}
		}
	});
	/* SLICK */
	$('.modal-review-slider').slick();

	var fancybox_sliders = [];
	$('.fbox-slider-wrap').each(function(i, el){
		temp =  $(this).clone();
		temp.find('.slick-slider').attr('data-slick', '');
		temp.find('.slick-slider > div').append('<div class="controls"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Закрыть</span></button><button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="true"></button><button class="slick-next slick-arrow" aria-label="Previous" type="button" aria-disabled="true"></button></div>');
		fancybox_sliders[$(this).attr('id')] = temp.html();
	});

	let obs_options = {
		root: null,
		rootMargin: '0px 0px 50% 0px',
	}

	var attr_sliders = [].slice.call(document.querySelectorAll(".data-attr-slider.slick-slider"));

	if(attr_sliders.length > 0){
		if ("IntersectionObserver" in window) {
			let attr_sliders_obs = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						$(entry.target).slick();					
						attr_sliders_obs.unobserve(entry.target);
					}
				});
			}, obs_options);
	
			attr_sliders.forEach(function(attr_sliders) {
				attr_sliders_obs.observe(attr_sliders);
			});
		}

		/*attr_sliders.each(function(i, el){
			$(this).slick();
		});	*/
	}

	var attr_sliders_mob  = [].slice.call(document.querySelectorAll(".data-attr-slider-mob"));

	if(attr_sliders_mob.length > 0){
		if ($(window).width() <= mob_break){
			if ("IntersectionObserver" in window) {
				let attr_sliders_mob_obs = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(entry) {
						if (entry.isIntersecting) {
							
								data_classes = $(entry.target).data('classes').split(' ');
				
								if (data_classes){
									data_classes.forEach((el) => {
										$(entry.target).addClass(el);
									});
								}
				
								$(entry.target).addClass('slick-slider');
								$(entry.target).slick();	
								attr_sliders_mob_obs.unobserve(entry.target);
												
						}
					});
				}, obs_options);
		
				attr_sliders_mob.forEach(function(attr_sliders_mob) {
					attr_sliders_mob_obs.observe(attr_sliders_mob);
				});
			}
		}

		/*if ($(window).width() <= mob_break){
			attr_sliders_mob.each(function(i, el){
				data_classes = $(this).data('classes').split(' ');

				if (data_classes){
					data_classes.forEach((el) => {
						$(this).addClass(el);
					});
				}

				$(this).addClass('slick-slider');
				$(this).slick();
			});	
		}*/
	}
	
	if($('.main-slider').length > 0){
		var slider_timer = 5000;
		var initial_slide = 0;

		if(window.location.hash) {
			initial_slide = $("[slide-id='"+window.location.hash.replace('#','')+"']").index('.slider-item');
			if (initial_slide < 0)
				initial_slide = 0;
		}

		if ($('.main-slider').data('timer'))
			slider_timer = $('.main-slider').data('timer');

		$('.main-slider').on('init', function(){
			
			//$(this).find('li.slick-active span').animate({ "width": "40px" }, slider_timer, function(){$(this).parents('li').addClass('viewed'); $(this).css('width', '10px')});
			$(this).find('li.slick-active span').css('transition', 'transform 10s linear');
			$(this).find('li.slick-active span').css('transform', 'translateX(40px)');
			$(this).find('li.slick-active').addClass('viewed');


			$(this).on('afterChange', function(event, slick, currentSlide, nextSlide){

				if (currentSlide == 0){
					$(this).find('li.viewed').removeClass('viewed');
				}

				$(this).find('li span').css('transition', 'none');
				$(this).find('li span').css('transform', 'none');	
				$(this).find('li.slick-active span').css('transition', 'transform 10s linear');
				$(this).find('li.slick-active span').css('transform', 'translateX(40px)');
				$(this).find('li.slick-active').addClass('viewed');
				//if (!$(this).is(':hover'))
					//$(this).find('li span').stop();
					//$(this).find('li span').css('width', '10px');
					//$(this).find('li.slick-active span').animate({ "width": "40px" }, slider_timer, function(){$(this).parents('li').addClass('viewed'); $(this).css('width', '10px');});
					
			});
		});
		
		/*$('.main-slider').hover(function() {
			$(this).find('li.slick-active span').stop();
			$(this).find('li.slick-active span').css('width', '10px')
		}, function() {
			$(this).find('li.slick-active span').animate({ "width": "40px" }, slider_timer, function(){$(this).css('width', '10px')});
		});*/

		$('.main-slider').slick({
			"slidesToShow": 1, 
			"slidesToScroll": 1,
			"initialSlide": initial_slide,
			"infinite": true,
			"speed": 300,
			"dots": true,
			"arrows": true,
			"pauseOnFocus": false,
			"pauseOnHover": false,
			"fade": true,
 			"cssEase": "linear",
			customPaging : function(slider, i) {
 				return "<button><span></span></button>";
			},
			"autoplay": true,
			"autoplaySpeed": slider_timer,
			"responsive": [
				{
					"breakpoint": 767,
					"settings": {
						"arrows":false,
						"pauseOnFocus": false,
						"pauseOnHover": false,
					}
				}
			]
		});
		
	}
	
	$('.slider-fancybox-open').on('click', function(e){
		e.preventDefault();
		target = $(this).closest('.fbox-slider-wrap');
		slide = $(this).closest('.slick-slide').data('slick-index');
		content = fancybox_sliders[target.attr('id')];
		
		Fancybox.show([
			{
				src: '<div class="fancybox-slider container">'+content+'</div>',
				type: "html",
			},
		],
		{
			mainClass: "fancybox-slider-window",
		} 
		);
		
		$('.fancybox-slider > .slick-slider').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: slide,
			adaptiveHeight: true
		});
		
		$('.fancybox-slider-window').on('click', '.close', function(e){
			Fancybox.close();
		});
		
		$('.fancybox-slider-window .controls').on('click', '.slick-next', function(e){
			$(this).parents('.slick-slider').slick('slickNext');
		});
		$('.fancybox-slider-window .controls').on('click', '.slick-prev', function(e){
			$(this).parents('.slick-slider').slick('slickPrev');
		});
		
	});
	
	
	/* OTHER */
	
	if ($('.simple-graph').length > 0){
		$('.simple-graph').each(function(){
			var cols = [];
			$(this).find('.simple-graph-item').each(function(i,e){
				if ($(this).data('count'))
					cols.push($(this).data('count'))
			});	
			var max = Math.max(...cols);
			$(this).find('.simple-graph-item').each(function(i,e){
				if ($(this).data('count'))
					$(this).css('height', Math.round($(this).data('count') / max * 100)+'%');
			});
			
		});
	}


	$('.poll').on('click', '.poll-line', function(e){
		poll = $(this).parent();
		if (!poll.hasClass('show')){
			poll.addClass('show');
			$(this).addClass('select');
			poll.find('.poll-line').each(function(i, el){
				$(this).find('.progress-bar').css('width', $(this).data('poll-percent'));
			})
		}
	});
	
	$('.show-closest-poll').on('click', function(e){
		poll = $(this).parent().find('.poll');
		if (!poll.hasClass('show')){
			poll.addClass('show');
			poll.find('.poll-line').each(function(i, el){
				$(this).find('.progress-bar').css('width', $(this).data('poll-percent'));
			})
		}
	});
	
	$('footer .navbar .nav-item .menu-header').on('click', function(e){
		if ($(window).width() < 768){
			$(this).parents('.footer-menu-col').find('.footer-menu-hidden').slideToggle();
			$(this).parents('.footer-menu-col').toggleClass('show');
		}
	});
	
	$('.share-button').on('click', function(e){
	    if (navigator.share){
			e.preventDefault();
			navigator.share({
				title: $(this).data('title'),
				text:  $(this).data('text'),
				url: $(this).attr('href'),
			});
		} else {
			var tooltip_btn = $(this);
			e.preventDefault();
			tooltip_btn.tooltip({
					title : 'Ссылка скопирована',
					placement: 'bottom',
					trigger: 'manual',
					delay: { show: 100, hide: 1000 }
			});
				
			navigator.clipboard.writeText($(this).attr('href'))
			.then(() => {
				tooltip_btn.tooltip('show');
				setTimeout(function () {
						tooltip_btn.tooltip('hide');
				}, 1000);
			})
			.catch(err => {
				console.error('Error in copying text: ', err);
			});
		}
	});
	
	$('.office-rating-content .read-more').on('click', function(e){
		$(this).parent().addClass('show');
	});
	
	// $('.map-link').on('click', function(e){
	// 	let data = $(this).data()
	// 	data['coord_arr'] = data['coord'].replace(/\s+/g, '').split(',');
	// 	data['reviews'] = window.reviews;
	// 	data['rating'] = window.rating_total;

	// 	if (window.office_photo){
	// 		if (data['officeNumber']){
	// 			data['photo'] = window.office_photo['dop-'+data['officeNumber']];
	// 		}else{
	// 			data['photo'] = window.office_photo['main'];
	// 		}
	// 	}

	// 	let days = [
	// 		'Понедельник',
	// 		'Вторник',
	// 		'Среда',
	// 		'Четверг',
	// 		'Пятница',
	// 		'Суббота',
	// 		'Воскресенье'
	// 	];

	// 	let this_date = new Date();
	// 	let this_weekday = this_date.getDay();

	// 	let opened = '<span class="red-1 semibold">Закрыто</span>';
	// 	if (data['hours'][this_weekday][1] && this_date.getHours() < data['hours'][this_weekday][1].split(':', 2)[0]){
	// 		opened = 'Открыто до '+data['hours'][this_weekday][1];
	// 	}

	// 	let workhours = Object.values(data['hours']);
	// 	let workhours_html = '';

	// 	workhours.splice(workhours.length, 1, workhours.splice(0, 1)[0]);

	// 	workhours.forEach(function(el, i) {
	// 		workhours_html += '<div class="d-flex justify-content-between bd-3 time-line';
	// 		workhours_html += i == this_weekday ? ' current': '';
	// 		workhours_html += '">';
	// 		if (el[0]){
	// 			workhours_html += days[i] +'<span>'+el[0]+' — '+el[1]+'</span>';
	// 		} else{
	// 			workhours_html += days[i] +'<span class="red-1">Выходной</span>';
	// 		}
	// 		workhours_html += '</div>';
	// 	});

	// 	let reference_html = '';
	// 	if (data['reference_point']){
	// 		reference_html = '<div class="d-flex align-items-center info-item"><i class="icon load icon-map-marker icon-gray-body icon-centered icon-bg-gray-6 icon-bg-rounded icon-bg-light-medium mr-10"></i><div class="bd-2">'+data['reference_point']+'</div></div>';
	// 	}

	// 	let bus_stop_html = '';
	// 	if (data['busstop']){
	// 		bus_stop_html = '<div class="d-flex align-items-center info-item"><i class="icon load icon-bus icon-gray-body icon-centered icon-bg-gray-6 icon-bg-rounded icon-bg-light-medium mr-10"></i><div class="bd-2">'+data['busstop']+'</div></div>';
	// 	}

	// 	let buses_html = '';

	// 	if (data['bus']){
	// 		buses_html += '<div class="d-flex align-items-center"><i class="icon load icon-bus icon-gray-body icon-centered icon-bg-gray-6 icon-bg-rounded icon-bg-light-medium mr-10"></i><div class="bd-2">Автобусы</div></div><div class="buses-list">';
			
	// 		remove_shit_from_buses(data['bus']).forEach(function(el, i) {
	// 			buses_html += '<span>'+el+'</span>';
	// 		});
												
	// 		buses_html += '</div>';
	// 	}

	// 	if (data['buses']){
	// 		buses_html += '<div class="d-flex align-items-center"><i class="icon load icon-minibus icon-gray-body icon-centered icon-bg-gray-6 icon-bg-rounded icon-bg-light-medium mr-10"></i><div class="bd-2">Маршрутки</div></div><div class="buses-list red">';
			
	// 		remove_shit_from_buses(data['buses']).forEach(function(el, i) {
	// 			buses_html += '<span>'+el+'</span>';
	// 		});
												
	// 		buses_html += '</div>';
	// 	}

	// 	if (data['trolleybus']){
	// 		buses_html += '<div class="d-flex align-items-center"><i class="icon load icon-bus icon-gray-body icon-centered icon-bg-gray-6 icon-bg-rounded icon-bg-light-medium mr-10"></i><div class="bd-2">Троллейбусы</div></div><div class="buses-list">';
			
	// 		remove_shit_from_buses(data['trolleybus']).forEach(function(el, i) {
	// 			buses_html += '<span>'+el+'</span>';
	// 		});
												
	// 		buses_html += '</div>';
	// 	}

	// 	let reviews_html = '';

	// 	if (data['reviews']){
	// 		for (var i = 0; i <10; i++) {

	// 			let date = new Date(data['reviews'][i]['date']);

	// 			reviews_html += '<div class="office-rating"><div class="office-rating-header d-flex"><div class="office-rating-avatar">'+data['reviews'][i]['name'].substring(0, 1)+'</div><div class="office-rating-header-content"><div class="office-rating-name"><span>'+data['reviews'][i]['name'].replace('.','');
	// 			reviews_html += data['reviews'][i]['city'] ? ', </span>'+ data['reviews'][i]['city'] : '</span>';
	// 			reviews_html += '</div><div class="office-rating-rating"><i data-star="'+data['reviews'][i]['rating']+'"></i><span>'+formatDate(date)+'</span></div></div></div><div class="office-rating-content bd-2">';
	// 			reviews_html += data['reviews'][i]['comment'].length > 112 ? data['reviews'][i]['comment'].substring(0,112) + '<span class="more-addit">...</span><span class="hidden-text ">'+data['reviews'][i]['comment'].substring(112)+'</span><div class="read-more st-2">Читать полностью</div>' : data['reviews'][i]['comment'];
	// 			reviews_html +='</div></div>';
	// 		}
	// 	}

	// 	let image_html = '';
	// 	let image_count = 0;

	// 	if (data['photo']){
	// 		data['photo'].forEach(function(el, i) {
	// 			image_count++
	// 			if (i == 0){
	// 				image_html = '<a href="/img_proxy?url='+el['big']+'" data-fancybox="map-modal-img"><img src="/img_proxy?url='+el['small']+'" class="img-fluid"></a>';
	// 			}else{
	// 				image_html += '<a href="/img_proxy?url='+el['big']+'" data-fancybox="map-modal-img" class="d-none"></a>';
	// 			}
	// 		});
	// 	} else {
	// 		image_html = '<a href="/images/map_office_placeholder_image_1.jpg" data-fancybox="map-modal-img"><img src="/images/map_office_placeholder_image_1.jpg" class="img-fluid"></a><a href="/images/map_office_placeholder_image_2.jpg" data-fancybox="map-modal-img" class="d-none"></a><a href="/images/map_office_placeholder_image_3.jpg" data-fancybox="map-modal-img" class="d-none"></a><a href="/images/map_office_placeholder_image_4.jpg" data-fancybox="map-modal-img" class="d-none"></a>';
	// 		image_count = 4;
	// 	}

		
	// 	$('#map_modal').modal('show');
	
	// 	$('#map_modal').on('hidden.bs.modal', function (e) {
	// 		$('#map_modal').remove();
	// 	});

	// 	$('#map_modal').on('shown.bs.modal', function (e) {
	// 		if ($(window).width() > mob_break){
	// 			$('#map_modal .map-modal-info').css('max-height', $('#map_modal .modal-content').outerHeight()+'px');
	// 		} else{
	// 			$('#map_modal .map-modal-wrap').css('height', ($('#map_modal .modal-content').outerHeight() - 55) +'px');
	// 		}
	// 	})
	// })
	
	$('.poll-form-button-group .btn').on('click', function(e){
		let parent = $(this).parent();
		let form_wrap = parent.next();

		form_wrap.find('#poll_form_content').text($(this).data('change-content'));
		form_wrap.find('#poll_form_hid_content').val($(this).text());
		parent.fadeOut(300, function(){
			form_wrap.fadeIn(300);
		});
	})

	$('.show-stickchat').on('click', function(e){
		if ($(window).width() > mob_break){
			e.preventDefault(); 
			$('#widgetClientOverlay').addClass('show');
			sessionStorage.setItem('ShowChat', 'true');
			document.body.classList.add("show-stickchat");
		}
	})	

	var UserState = localStorage.getItem('UserState') ? JSON.parse(localStorage.getItem('UserState')) : {};
	var PreviousUserState = {};

	function SetUserState(opts){
		PreviousUserState = UserState;
		UserState = Object.assign({}, UserState, opts);
		localStorage.setItem('UserState', JSON.stringify(UserState));
	}

	for (var item in UserState){
		var input = $('[name="' + item + '"]:not([type="hidden"])');

		for (var i = 0; i < input.length; i++){
			var curInput = input.eq(i);

			if (curInput.length > 0 && !curInput.attr('data-notsavetostate')){
				curInput.val(UserState[item]);

				if (UserState[item]){
					curInput.next('label').addClass('active');
				}
			}
		}
	}
	
	$("body").on("input", "form input, form textarea", function () {
		var $field = $(this);
		if ($field.data("notsavetostate")) {
			return;
		}
		var newVal = {};
		newVal[$field.attr("name")] = $field.val();
		SetUserState(newVal);
	});

	$("body").on('click', '[data-scroll]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).data('scroll')).offset().top - 15
		}, 500);
	});

	$('body').on('click', '.read-more-wrap .read-more', function(e){
		$(this).parent().addClass('show');
	});


	$( ".scroll-to" ).click(function(e) {
		e.preventDefault();
		compensate = 20;
		$('html, body').animate(
			{scrollTop: $($(this).attr('href')).offset().top-compensate}, 1000);
	});
	
	function main_btn_anim(target){

		void target.offsetWidth;
		target.addClass('rotateY');
		setTimeout(function () {
			target.removeClass('rotateY');
		}, 1500);

		setTimeout(function () {
			main_btn_anim(target);
		}, 11000);
	}

	if ($('.main-btn-anim').length > 0){
		setTimeout(function () {
			main_btn_anim($('.main-btn-anim'));
		}, 5000);
	}

	if ($('.timeline-block .mobile-spoiler').length > 0){
		if ($(window).width() < 768){
			$('.timeline-block').each(function(){
				var hidden_timeline_content = ' ';
				var hidden_content_wrap;

				$(this).children('.mobile-spoiler').first().before('<div class="mobile-spoiler-content"></div>');
				hidden_content_wrap = $(this).children('.mobile-spoiler-content');
				
				$(this).children('.mobile-spoiler').each(function(i, el){
					hidden_timeline_content += el.outerHTML;
					$(el).remove();
				});

				hidden_content_wrap.html(hidden_timeline_content);
				hidden_content_wrap.after('<div class="timeline-step-wrap link"><a href="#" class="st-2 blue-1 d-flex align-items-center">Смотреть все этапы <i class="icon icon-arrow-down icon-centered icon-blue"></i></a></div>')

				$(this).children('.timeline-step-wrap.link').on('click', 'a', function(e){
					e.preventDefault();
					$(this).parent().prev().slideToggle(800);
					$(this).parent().remove();
				})
			});			
		}
	}

	if($('.sticky').length > 0 && $(window).width() > mob_break){
		$('.sticky').each(function(){
		    $(this).css('max-width',$(this).parent().width()+"px");
		})

		function sticky(){
		     if($(window).width() > mob_break){
			     $('.sticky').each(function(){
					stickyTop= $(this).offset().top;
					stickyBottom= stickyTop + $(this).outerHeight();
					parentTop= $(this).parent().offset().top;
					parentBottom= parentTop + $(this).parent().outerHeight();
					windowTop= $(window).scrollTop();
					
					if(stickyTop < windowTop && !$(this).hasClass('stop')){
						$(this).addClass('fixed');
					}

					if(stickyTop < parentTop){
						$(this).removeClass('fixed');
					}

					if(windowTop + (30 + headerSize) < stickyTop && $(this).hasClass('stop')){
						$(this).removeClass('stop');
						$(this).addClass('fixed');
					}else if(stickyBottom > parentBottom && $(this).hasClass('fixed')){
						$(this).removeClass('fixed');
						$(this).addClass('stop');
					}
		   	 	})
			}
		}
		$(window).scroll(function(){sticky()});
	}

	var js_counters = [].slice.call(document.querySelectorAll(".counter-number"));
	if(js_counters.length > 0){
		if ("IntersectionObserver" in window) {
			let js_counter_obs = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						var speed = 100;
						var sep = ' ';
						const value = entry.target.getAttribute('counter-data');

						if (entry.target.getAttribute('speed'))
							speed = entry.target.getAttribute('speed');

						if (entry.target.getAttribute('sep'))
							sep = entry.target.getAttribute('sep');

						const time = value / speed;

						const animate = () => {
							
							const data = parseInt(entry.target.innerText.replaceAll(sep, ''));
							
							if(data < value) {
								entry.target.innerText = numberWithSep(Math.ceil(data + time), sep);
								setTimeout(animate, 1);
							}else{
								entry.target.innerText = numberWithSep(value, sep);
								js_counter_obs.unobserve(entry.target);	
							}
						}
					
						animate();			
					}
				});
			});
	
			js_counters.forEach(function(js_counters) {
				js_counter_obs.observe(js_counters);
			});
		}	
	}
	

	
});

/* GEO */

var savedCity = getCookie('edin_center_geo');
//var check_city = getCookie('city_checked');
var check_city = localStorage.getItem('city_checked');
var try_to_set_geo = 0;

// if ($_GET['disable_city_check']){
// 	check_city = 'true'
// }

// if (!savedCity && check_city != 'true') {
// 		try{
// 			getGeoInfo();
// 		} catch(err) {};
// }

// async function getGeoInfo() {
// 	try {
// 		var res = await fetch('/?get_user_geo=1');
// 		if (!res.ok) {
// 			throw new Error('Геоданные не загруженны');
// 		}
// 		var data = await res.json();

// 		if (data.latitude && data.longitude){
// 			$.ajax({
// 				url: '/api/geo',
// 				method: 'post',
// 				data: {
// 					lat:data.latitude,
// 					lon:data.longitude
// 				},
// 				success: function (data) {
// 					//setCookie('city_checked', 'true', 1);
// 					localStorage.setItem('city_checked', 'true');
// 					if (data.name_en){
// 						setCookie('identiedCity', data.name_en , ten_years);
// 						window.stop();
// 						window.location.reload(true);
// 					}
// 				},
// 				error: function(){
// 					//setCookie('city_checked', 'true', 1);
// 					localStorage.setItem('city_checked', 'true');
// 				}
// 			});
// 		}
// 	} catch (error) {
// 		if ( try_to_set_geo < 3){
// 			setTimeout(getGeoInfo(), 1000);
// 		}
// 		try_to_set_geo++;
// 	}
// }
	
$( document ).ready(function() {

	function renderCityByLetter(letter) {
		$.ajax({
			url: '/api/geo/citiesListByLetter/' + letter,
			type: 'get',
			async: false,
			success: function success(data) {
				var citiesList = $('[data-cities="letter"]');
				citiesList.html('');
				var cities = {};

				for (var city in data) {
					city = data[city];
					cities[city.city_id] = city;
					citiesList.append("<li><a data-setcity='".concat(JSON.stringify(city).trim(), "'>").concat(city.name, "</a></li>"));
				}

				localStorage.setItem('citiesList', JSON.stringify(cities));
			}
		});
	}

	$(document).on('click', '.popup_city_select a[data-setcity]', function (e) {
		var date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 30 * 12 * 10);
		document.cookie = "setCityJS=" + toUnicode($(this).attr('data-setcity')) + "; domain=" + window.location.hostname + ";  path=/; expires=" + date.toUTCString();
		window.location.replace(window.location.origin + window.location.pathname + "?nocache=" + (new Date()).getTime());
		//window.location.reload();
	});
	
	$('.popup_city_select .srch_wrapper .srch_text').focus(function () {
		$(this).trigger("keyup");
	});
	
	
	var mapKey = {
		'q' : 'й', 'w' : 'ц', 'e' : 'у', 'r' : 'к', 't' : 'е', 'y' : 'н', 'u' : 'г', 'i' : 'ш', 'o' : 'щ', 'p' : 'з', '[' : 'х', ']' : 'ъ', 'a' : 'ф', 's' : 'ы', 'd' : 'в', 'f' : 'а', 'g' : 'п', 'h' : 'р', 'j' : 'о', 'k' : 'л', 'l' : 'д', ';' : 'ж', '\'' : 'э', 'z' : 'я', 'x' : 'ч', 'c' : 'с', 'v' : 'м', 'b' : 'и', 'n' : 'т', 'm' : 'ь', ',' : 'б', '.' : 'ю','Q' : 'Й', 'W' : 'Ц', 'E' : 'У', 'R' : 'К', 'T' : 'Е', 'Y' : 'Н', 'U' : 'Г', 'I' : 'Ш', 'O' : 'Щ', 'P' : 'З', '[' : 'Х', ']' : 'Ъ', 'A' : 'Ф', 'S' : 'Ы', 'D' : 'В', 'F' : 'А', 'G' : 'П', 'H' : 'Р', 'J' : 'О', 'K' : 'Л', 'L' : 'Д', ';' : 'Ж', '\'' : 'Э', 'Z' : '?', 'X' : 'ч', 'C' : 'С', 'V' : 'М', 'B' : 'И', 'N' : 'Т', 'M' : 'Ь', ',' : 'Б', '.' : 'Ю',
	};
	
	var srch_text_timer;
	
	$('.popup_city_select').on('keyup, focus, input', '.srch_wrapper .srch_text', function (e) {
		
		var str = $(this).val();
		var r = '';
		for (var i = 0; i < str.length; i++) {
			r += mapKey[str.charAt(i)] || str.charAt(i);
		}
		$(this).val(r);
		
		var city_name = $(this).val();	

		if (city_name.length > 1) {
			$(".srch_reset").removeClass('d-none');
			$(".srch_submit").addClass('d-none');
			clearTimeout(srch_text_timer);
			srch_text_timer = setTimeout(function () {
				jQuery.ajax({
					url: '/api/geo/findCity/' + city_name,
					type: 'get',
					async: false,
					success: function success(data) {
						var searchListContainer = $('.ajax_city_list');
						searchListContainer.html('');
						searchListContainer.append('<ul></ul>');
						var searchList = searchListContainer.find('ul');
												
						if (data) {
							let i = 1;
							for (var city in data) {
								city = data[city];
								city_class = i > 20 ? ' class="hidden"':'';
								searchList.append("<li"+ city_class +"><a data-setcity='".concat(JSON.stringify(city).trim(), "'>").concat(city.name, "</a></li>"));
								i++;
							}
							if (i > 20)
								searchListContainer.append('<div class="show-more-cities">и еще <span>'+i+' '+ num_word(i, ['город', 'города', 'городов']) +'</span></div>')
						} else {						
							if (!sessionStorage.offices_full_list){
								jQuery.ajax({
									url: '/api/geo',
									type: 'post',
									async: false,
									success: function success(data) {
										let temp_data = data;
										temp_data.splice(0,1);
										sessionStorage.setItem('offices_full_list', JSON.stringify(temp_data));
									}
								});
							}
							//probably_list = getMultipleRandom(JSON.parse(sessionStorage.offices_full_list), 8);
							probably_list = JSON.parse(sessionStorage.offices_full_list);
							searchListContainer.html('<div class="not-found"><span>Такого города не найдено</span></div><div class="probably-list"><div class="st-2 subtitle"><i class="icon icon-question icon-centered"></i>Возможно вы искали:</div><ul></ul></div>');	
							searchList = searchListContainer.find('ul');
							for (var city in probably_list) {
								city = probably_list[city];
								searchList.append(`<li><a data-setcity='{"name":"`+city['name']+`", "name_en":"`+city['name_en']+`", "city-id":"`+city['geocity']+`"}'>`+city['name']+'</a></li>');
							}
						}
						searchListContainer.slideDown(500);
						searchListContainer.addClass('show');
					}
				});
			}, 500);
		} else {
			$(".srch_wrapper .srch_reset").addClass('d-none');
			$(".srch_wrapper .srch_submit").removeClass('d-none');
			$(".ajax_city_list").hide().removeClass('show');
			clearTimeout(srch_text_timer);
		}
	});
	
	$('.popup_city_select').on('click', '.show-more-cities', function () {
		$(this).parent().find('.hidden').removeClass('hidden');
		$(this).addClass('d-none');
	})
	
	
	$('body').on('submit', '.searchForm--city', function (e) {
		e.preventDefault();
		var form = $(this);
		var firstLink = form.find('.ajax_city_list a');
		var url = firstLink.attr('href');

		if (firstLink.length > 0 && url) {
			location.href = url;
		}
	});

	$('body').on('click', '.srch_wrapper .srch_reset', function () {
		$(".srch_wrapper .searchForm")[0].reset();
		$(".srch_wrapper .srch_reset").css("display", "none");
		$(".srch_wrapper .srch_submit").css("display", "inline");
		$(".ajax_city_list").hide();
		$(".srch_wrapper .srch_text").trigger('input');
	});

	var fst_time_opened_city_modal = false;

	$('.popup_city_select').on('show.bs.modal', function (e) {
		if (!fst_time_opened_city_modal){
			renderCityByLetter('А');
			fst_time_opened_city_modal = true;
		}
	});

	$('body').on('click', '.city_wrapper .letters_list li a', function () {
		var letter = $(this).data("letter");
		$('.city_wrapper .letters_list li.active').removeClass('active');
		$(this).parent().addClass('active');
		renderCityByLetter(letter);
		return false;
	});
});


//AJAX REVIEWS
$( document ).ready(function() {
	$('.ajax-reviews-load').on('click', function (e) {
		e.preventDefault();

		show_more_btn = $(this);
		city = show_more_btn.data('city');
		page = show_more_btn.attr('data-page');
		limit = show_more_btn.data('limit');
		rating = show_more_btn.data('rating');
		group = show_more_btn.data('group');

		$.ajax({
			url: '/api/ajax/reviews?page='+page+(city?'&city='+city:'')+(rating?'&rating='+rating:'')+(group?'&group='+group:''),
			type: 'get',
			success: function success(data) {
				$('.ajax-reviews-list').append(data);
				if (parseInt(page)+1 >= limit){
					show_more_btn.addClass('d-none');
					$('.load-another-city').removeClass('d-none');
				}else{
					show_more_btn.attr('data-page', parseInt(page) + 1);
				}
			},
			error: function(){

			}
		});
	});

	$('.rating-selector input:not(:disabled):not(:checked)').on('click',  function (e) {
		url = $(this).data('url');
		if (url){
			location.href = url;
		}
	});

});

$( document ).ready(function() {
	$('#lk_registration_modal').on('submit', 'form', function (e) {
		e.preventDefault();
		var form = $(this);

		phone_input = form.find('[name="phone"]');
		
		if (phone_input.val().length < 16){
			
			phone_input.removeClass('is-valid').addClass('is-invalid');
			phone_input[0].setCustomValidity('Введите номер телефона');
			phone_input[0].reportValidity();
			return false;
		}

		grecaptcha.ready(function () { // по готовности скриптов recaptcha
			grecaptcha.execute(window.rekey, {
				action: 'sendform' // этот параметр не имеет значения
			}).then(function (token) {
				window.retoken = token;

				var data = form.serialize();
				var cityId = 0;
				
				if (getCookie('edin_center_geo')) {
					var geo = JSON.parse(decodeURIComponent(getCookie('edin_center_geo')));
					cityId = geo.id || 999;
				}

				if (cityId) {
					data += '&city_id=' + cityId;
				}

				if ($_GET['ref']) {
					data += '&ref=' + encodeURIComponent($_GET['ref']);
				} else if(sessionStorage.getItem('ref')){
					data += '&ref=' + sessionStorage.getItem('ref');
				}

				if (window.retoken) {
					data += '&retoken=' + window.retoken;
				}

				var url = form.attr('action');
				var method = form.attr('method');

				$.ajax({
					url: url,
					data: data,
					method: method,
					dataType: 'json',
					success: function success(data) {
						form.parents('.modal').modal('hide');
						if (data.redirect)
							window.location.assign(data.redirect);
					},
					error: function error(_error) {
						
						form.parents('.modal').modal('hide');

						error_data = _error.responseJSON;

						error_msg = error_data.errors.message ? error_data.errors.message : error_data.message;
						error_msg = error_msg ? error_msg : 'Попробуйте отправить заявку позднее';
						openSuccessModal('Произошла ошибка', error_msg, 'success-error', 'icon-emote-excl', null);
					}
				});
			});
		});
	});
});

/* VACANCY */

$( document ).ready(function() {

	$('.custom-file input').on('change', function(e){
		var file_name = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
		$(this).parent().find('label').html('<span class="bold gray-1">Файл: </span><span class="blue-1">'+file_name+'</span>');
	});

	$('body').on('submit', 'form.vacancy-form', function (e) {
		e.preventDefault();
		var form = $(this);

		phone_input = form.find('[name="vacancy[phone]"]');
		
		if (phone_input.val().length < 16){
			
			phone_input.removeClass('is-valid').addClass('is-invalid');
			phone_input[0].setCustomValidity('Введите номер телефона');
			phone_input[0].reportValidity();
			return false;
		}

		if (form.attr('data-sending') === false) {
			return;
		}

		form.attr('data-sending', true);

		grecaptcha.ready(function () { // по готовности скриптов recaptcha
			grecaptcha.execute(window.rekey, {
				action: 'sendform' // этот параметр не имеет значения
			}).then(function (token) {
				window.retoken = token;

				var data = new FormData(form[0]);

				if (window.retoken) {
					data.append('retoken', window.retoken);
				}

				var url = form.attr('action');
				var method = form.attr('method');
				var button = form.find('[type=submit]');
				button.attr('disabled', true);

				$.ajax({
					url: url,
					data: data,
					method: 'POST',
					contentType: false,
					processData: false,
					success: function success(data) {

						form[0].reset();
						form.removeAttr('data-sending');
						button.attr('disabled', false);
						form.find('.is-valid').removeClass('is-valid');
						form.find('.is-invalid').removeClass('is-invalid');
						form.find('.custom-file label').html('<span class="blue-1">Выберите резюме/портфолио</span> <br>(.pdf,.doc,.docx,.rtf)');
							
						if (form.attr('modal-confirm')){
							openSuccessModal(form.attr('confirm-title'), form.attr('confirm-text'), form.attr('confirm-class'), form.attr('confirm-icon'), form.attr('confirm-button'));
						}
					},
					error: function error(_error) {
						error_data = _error.responseJSON;

						error_msg = error_data.errors.message ? error_data.errors.message : error_data.message;
						error_msg = error_msg ? error_msg : 'Попробуйте отправить заявку позднее';
						openSuccessModal('Ошибка', error_msg, 'success-error', 'icon-emote-excl', null);
						
						form.removeAttr('data-sending');
						button.attr('disabled', false);
					}
				});
			});
		});

	});

});
