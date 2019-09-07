<template>
<div class="page">
  <navbar>
    <div @click="goBack" slot="left">
      <!-- <i class="icon"></i> -->
      <span>后退</span>
    </div>
  </navbar>
  
  <div class="page-content">
    <h1>{{ article.title }}</h1>
    <div class="meta">
      <span># {{ article.tag }}</span>
      <span>@ {{ article.view }}</span>
    </div>
    <div class="the-content" v-html="article.content">{{ article.content }}</div>
  </div>
</div>
</template>

<script>
import navbar from '@/view/ui/NavBar'
const cc = "【天降优惠券】先领券，再下单<br>点击领取优惠券：https://m.piaoniu.com/campaign/douban-coupon/?undefined=true&amp;channel=campaign&amp;from=singlemessage&amp;isappinstalled=0<br><br><br>购买须知：电子票：现场扫码验票或凭姓名手机号入场（以现场为准）；扫码验票流程：打开票牛APP→订单详情→票券详情→现场扫码入场。 <br>14岁以下禁止入内，14岁以上凭票入场 一票一次入场 请于前台凭手机号/订单号兑换入场 一经售出，恕不退换 <br>他是恐怖漫画届教父级别的艺术大师，他是日本近代最重要的经典美学漫画家。<br>&nbsp;<br>他的艺术作品会引发人们发自内心的恐惧，但同时他在全世界拥有者众多骨灰级粉丝，他的作品也被世界范围内的传播，他就是 - 伊藤润二，世界级经典美学恐怖大师。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div>&nbsp;<br>&nbsp;<br>伊藤润二大师是日本著名经典美学漫画家，出生于日本的岐阜县。<br>&nbsp;<br>自他年幼时期便热衷于楳图一雄与古贺新一的奇怪漫画，遂展开其自身的绘画生涯。<br>&nbsp;<br>其代表作无数，《富江》系列、《漩涡》、《至死不渝的爱》、《人头气球》等等，被电影化的作品多不胜数。伊藤润二大师除获得各国艺术文化奖项外，更经常受邀参加各国举办<br>的知名漫画及艺术展，更担任2015法国昂古莱姆国际漫画节的荣誉嘉宾。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>&nbsp;<br>《伊藤润二经典美学AR体验展》这次到达北京站，是对伊藤粉丝们尤其是北京地区粉丝们的一个热切呼唤：看过的小伙伴可以再次来饱眼福啦！<br>&nbsp;<br><br>没看过的小伙伴你还在等什么？北京站的伊藤展地点选在了全国第一家非盈利的公益美术馆---北京今日美术馆，这次展览将全方位展出伊藤润二大师的很多著名作品，并且结合当代最新的AR视觉科技，将现实作品和虚拟场景相结合全方位的向大家呈现出最震撼的恐怖美学， <br>展览还相配有最原汁原味的伊藤风周边，让大家淋漓尽致的感受到视觉冲击和感官享受。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>&nbsp;<br>&nbsp;伊藤润二大师笔下的所有作品，让人在阅读完种种令人焦虑与心惊的画面之后，都会坠入到凄冷的黑暗漩涡里的，但更多的是有着让人读后念念不忘而且还会让自己进<br>行深刻反思的魅力。<br>&nbsp;<br>在美学艺术界，恐怖是一种为了达到作品严肃性的方法手段而已，而伊藤润二大师无疑更具有掌控恐怖的能力，他的恐怖纠缠<br>于手段与目的之间，贯穿于作品的每一个笔触却是具有与生俱来的严肃性与深刻性的交织悲鸣，每一幅画面都在展现着人类的丑恶举动。<br>&nbsp;<br>对于漫画来说，最重要的表达就是线条，每一个线条每一个笔触都毫无保留的展现了作者的内心感受，是作者将自己的艺术所对外表达的一种方式。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>&nbsp;<br><br>1986年伊藤获得“楳图赏”的作品《富江》里清晰可见一种粗旷的写实风格，《富江》三卷通篇都围绕着“美与丑”的辩证进行讲述，主人公“富江”是一个极其美丽的尤物，几乎被所有男性爱慕，但却招来自己的杀生之祸<br>。<br>&nbsp;<br>有趣的是，她本身竟是可以无限繁殖的怪物，被肢解的身体部分又可以重新生成一个个新的“富江”。<br>&nbsp;<br>所有男人都想得到拥有她，所有女人都嫉妒讨厌她，而“富江”们本身也在互相嫉恨，以至于指示拜倒在她们裙下的男人们互相杀戮，最后却都难免被肢解的命运。在伊藤的观念中<br>“富江”的美承载了人类本性的贪婪与欲望，其被思想控制后的表现都极为丑陋，在这个意义上，美女与烂肉无异，美丽与丑陋无法分别，就像优美流畅的线<br>条勾勒出阴森可怕的外形，伊藤在所有作品中都试图表达着“美丽是丑陋的而丑陋仍然是丑陋的”。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>&nbsp;<br><br>这种美好在伊藤的恐怖漫画作品中成为了一种假象，随之而来的便是绝望，但是伊藤大师却又留存这一线希望来玩转读者的脑细胞，这种存在的一线希望，便是爱情。伊藤大师在其作品中对爱情部分的处理，是十分细腻和表述最伟大升级化。<br>&nbsp;<br>在《至死不渝的爱》和《漩涡》作品里都表现了恋人间的对待爱情的忠贞和为其牺牲，其 <br>爱情主题能呈现出丰富多彩的内容，对爱情的描绘往往更能体现出人性的复杂与自私，而当人性的私欲与需要与别人分享的爱情冲突之后，种种意想不到的变异后果便发生了，伊藤大师要展现的便是这些之后的奇特爱情的附加状态。<br>&nbsp;<br><br>在伊藤大师不断进行创造的艺术生涯里，他的线条变得更加细腻柔软，但是一改不变的还是他的漫画写实主义风格，在这种风格下，伊藤大师的作品才会一直带给我们强大的视觉冲击感，其漫画内容的丰富曲折，情节赋有伸缩的张力，同时还有着深刻引发人生思考的漫画主题，表达着善爱恶丑的基调，一直影响着大众读者们，让我们的感官世界在被恐怖美学支配、身心感受着暴力美学带给我们的快感的同时，心灵的深处更是引发人们对于人性道德的主动思考和理解。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>&nbsp;<br>如此潮的【伊藤润二经典美学AR体验展】有着你让你不得不看的魅力！<br>&nbsp;<br>魅力一：吸引了无数世界级名人的目光<br>&nbsp;<br><br>伊藤润二不仅是在日本很受欢迎的恐怖漫画大师，近几年魅力更是席卷全球，作品被翻译成12种语言，不仅在英语系、欧洲及亚洲国家掀起一股热潮，连东欧及南美洲都有热情粉丝，甚至连漫画界最重要的法国安古兰漫画展，都曾邀他举办活动！世界级恐怖大师称号，伊藤润二当之无愧。<br>&nbsp;<br>话题女王伊能静看完展览评价说 <br>“超恐怖又有趣”；创作天后陈珊妮不但玩了两次自拍机还“难得败了周边商品”；音乐与戏剧双栖才子梁正群被“吓傻了”、除此之外，演员黄河、主持人黄子佼、占星女王唐立淇、主持人蔡灿得也都亲自到现场看展或参加见面会。<br>&nbsp;<br><br>来看【伊藤润二经典美学AR体验大展】，早已经成为一个几乎全球文艺青年及恐怖漫画发烧友间的交流话题，一起来感受人性的压抑情感，展现这残酷悲剧的作品，透过伊藤润二的漫画作品，在看展时找到难得的审美共鸣。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>&nbsp;<br>魅力二：史无前例的预售盛况一票难求&nbsp;&nbsp; <br>&nbsp;<br>【伊藤润二经典美学AR体验大展】&nbsp;早在2015年首度展出时，创下台湾文创展演的售票纪录。展览官方粉丝团人数一上线就于第一日内冲破20,000人大关, <br>2017年2月在香港中环PMQ文创空间登场，短短21天展期，每天都挤得水泄不通！<br>&nbsp;<br><br>周六日光是排队进场就需要3-4个小时。在上海艺仓美术馆也79天展期更是创下8万人的参观纪录！现在伊藤大展终于到达了首都北京，身在帝都的发烧友和美学爱好者们，一定不能错过这次最近距离感受当代漫画大师作品的机会，一定要提前买票稳稳的进场呀。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>（伊藤润二大师与粉丝的合影）<br>&nbsp;<br>魅力三：最前线的艺术趋势融合多种体验<br>&nbsp;<br>【伊藤润二经典美学AR体验展】如此受欢迎，除了伊藤润二经典作品加持外，策展团队的高水平策划，也让观众的感官世界和精神世界都被震撼，深深抓住了各路伊粉的心。<br>&nbsp;<br><br>无论是可以印出专属人头气球页面的「人头气球拍照亭」，还是首度以近3米高度印制的超大幅彩图，又或是令人尖叫不断的AR体验，都让观众大呼过瘾！大展更全球首度公开作者的工作室，让读者们有机会见识到伊藤润二“独特恐怖美学”的诞生过程！一次性满足大家所有对伊藤润二大师的期待。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>（观众亲身体验AR视觉科技）<br>&nbsp;<br><br>&nbsp;9月24日开幕直到12月份在北京今日美术馆，大家可以以最近的距离，通过其残酷悲伤的作品，善与美爱与恨的交织表达，黑与白弯与直的画面，感受伊藤大师的内心真挚的流露。<br>&nbsp;<br><br>与AR视觉科技的完美结合，更加让我们的感官世界尽情暴露在被恐怖美学支配中、全身心感受并且享受着暴力美学带给我们的快感，让我们的心灵的深处跟随者伊藤润二大师的作品进行对于道德与人性的理解和思考。<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div><br>（伊藤润二大师照片）<br>&nbsp;<br>9月24日在北京今日美术馆【伊藤润二经典美学AR体验展】<br>&nbsp;<br>与你如期相会！<br>&nbsp;<br><div class='middle'><br><span class='pic-title'></span></div>"
export default {
  name: 'ArticleView',
  components: {
    navbar
  },
  data () {
    return {
      // Articles
      articles: [
        { id: 1, title: '如何让孩子不仅吃得饱，更吃得好?给家长的7条冬季膳食建议', tag: '健康成长', view: 3852, thumbnail: '/static/images/articles/thumb1.jpg', content: cc },
        { id: 2, title: '教娃功课教到崩溃?九张图告诉你辅导孩子的正确打开方式', tag: '习惯养成', view: 3412, thumbnail: '/static/images/articles/thumb2.jpg', content: cc },
        { id: 3, title: '这款产品火爆了！就在第四届中国幼教资源博览会上!', tag: '益智教育', view: 2633, thumbnail: '/static/images/articles/thumb3.jpg', content: cc },
        { id: 4, title: '如何让孩子不仅吃得饱，更吃得好?给家长的7条冬季膳食建议', tag: '健康成长', view: 3852, thumbnail: '/static/images/articles/thumb1.jpg', content: cc },
        { id: 5, title: '教娃功课教到崩溃?九张图告诉你辅导孩子的正确打开方式', tag: '习惯养成', view: 3412, thumbnail: '/static/images/articles/thumb2.jpg', content: cc },
        { id: 6, title: '这款产品火爆了！就在第四届中国幼教资源博览会上!', tag: '益智教育', view: 2633, thumbnail: '/static/images/articles/thumb3.jpg', content: cc }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    article () {
      return this.articles[this.$route.params.id - 1]
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  background-color:#fff;
  height:100%;
  
  .page-content {
    padding: 15px;
  }
  h1 {
    font-size:21px;
  }
  .meta {
    margin-bottom:15px;
  }

  .the-content {
    word-wrap: break-word;
    width: 100%;
    overflow: hidden;
  }
}
</style>
