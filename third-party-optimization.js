/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version. 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details. 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * @category  SEO / THIRD PARTY LOADING
 * @package   none
 * @license   GNU
 * @author    Iri Takeshi
 * @copyright Iri Takeshi (Paris, France)
 * @link      https://github.com/takitano/third-party-optimization/blob/master/README.md$
 */

/**
 * @class thirdParty
 */
class thirdParty {
    elements = [];
    isLaunched = false;
    events = ['scroll', 'mousemove', 'touchstart'];
    botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";

    /**
     * @constructor
     * @param {Boolean} event Flag to enable/disable the user interaction
     * @param {Boolean} bot Flag to enable/disable the visitor type detection
     * @return void
     */
    constructor(event = true, bot = true) {
        let me = this;

        if (event == true) {
            for (let i in this.events) {
                window.addEventListener(this.events[i], function () {
                    me.launch();
                });
            }
        }

        if (bot === true && this.isBot() === false && event == false) {
            window.addEventListener('load', function () {
                me.launch();
            });
        }
    }

    /**
     * @method add
     * @param {String/Function} element Element to launch
     * @param {Boolean} force force to launch now the current element
     * @return void
     */
    add(element, force = false) {
        if (force == true) {
            if (typeof element == 'string') {
                this.script(element);
            }
            if (typeof element == 'function') {
                (element)();
            }
        } else {
            this.elements.push(element);
        }
    }

    /**
     * @method launch
     * @private
     * @return void
     */
    launch() {
        if (this.isLaunched == true) {
            return false;
        }
        for (let i in this.elements) {
            if (typeof this.elements[i] == 'string') {
                this.script(this.elements[i]);
            }
            if (typeof this.elements[i] == 'function') {
                this.elements[i]();
            }
        }
        this.isLaunched = true;
    }

    /**
     * @method script
     * @private
     * @param {String} url Url string
     * @return void
     */
    script(url) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.defer = true;
        s.src = url;
        var x = document.getElementsByTagName('head')[0];
        x.appendChild(s);
    }

    /**
     * @method isBot
     * @private
     * @method isBot
     * @return void
     */
    isBot() {
        var re = new RegExp(this.botPattern, 'i');
        var userAgent = navigator.userAgent;
        if (re.test(userAgent)) {
            return true;
        }
        return false;
    }
}
