import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import BlogBanner from "../../Component/Banner/BlogBanner";
import DetailsSideBar from "../../Component/Blogs/DetailsSideBar";
import CommentForm from "../../Component/Form/CommentForm";
import Comment from "../../Component/Comment/Comment";
import GotoTop from "../../Component/GotoTop";

function SinglePost() {
  const [isLoading, setIsLoading] = useState(true);
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header logo="assets/images/logo4.png" joinBtn={true} />
        <BlogBanner />
        <section className="blogpage-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <div className="single-post-area">
                  <p>
                    Tosser posh grub he lost his bottle bamboozled show off show
                    off pick your nose and blow off cheesed off starkers what a
                    load of rubbish, Jeffrey bubble and squeak I Charles a load
                    of old tosh some dodgy chav wind up David gormless, hotpot
                    arse over tit hanky panky bog-standard don't get shirty with
                    me bloke Richard. Smashing he legged it in my flat bodge a
                    blinding shot amongst brilliant blag, I grub A bit of how's
                    your father bite your arm off the BBC the full monty
                    chancer, bobby bender he nicked it down the pub Why cheeky
                    bugger. Starkers pardon you bubble and squeak a blinding
                    shot it's all gone to pot bits and bobs car boot lurgy so I
                    said cheesed off boot Harry such a fibber, naff chinwag
                    bamboozled the bee's knees bloke fanny around loo are you
                    taking the piss barney off his nut cack. Arse over tit he
                    nicked it that matie boy lost the plot pardon me my lady
                    well cheers he legged it, boot bits and bobs brown bread is
                    cras bamboozled bite your arm off down the pub brolly,
                    cobblers horse play what a load of rubbish sloshed chancer
                    say you mug cockup. Geeza some dodgy chav bonnet Oxford so I
                    said pukka pardon you starkers cor blimey guvnor are you
                    taking the piss, cheesed off in my flat cheeky posh down the
                    pub horse play nancy boy plastered cobblers cack, morish
                    chinwag the BBC my good sir jolly good cuppa amongst
                    blatant. Grub owt to do with me cheeky bugger squiffy
                    chinwag pukka say hunky-dory crikey quaint fanny around
                    jolly good brown bread up the kyver cack zonked tickety boo
                    mush morish.
                  </p>
                  <div className="post-thumb">
                    <img src="assets/images/single-post/1.jpg" alt="" />
                  </div>
                  <h4 className="article-title">
                    Logotype Masterclass with Jessica Hische
                  </h4>
                  <p>
                    Lost the plot morish bleeder absolutely bladdered my lady
                    chinwag that bleeding Eaton blag, cheeky bugger burke matie
                    boy brown bread say pukka off his nut sloshed mufty, squiffy
                    show off show off pick your nose and blow off brolly bite
                    your arm off bloke bubble and squeak hotpot happy days. Old
                    spiffing cras bugger blimey chancer me old mucker vagabond
                    you mug, amongst absolutely bladdered spend a penny ruddy
                    wellies he lost his bottle hanky panky up the kyver bender,
                    give us a bell my good sir car boot pear shaped young
                    delinquent victoria sponge tomfoolery. Lavatory knackered
                    pukka chip shop a blinding shot cor blimey guvnor bodge
                    blower, barmy faff about cheeky nice one at public school.
                    Have it down the pub posh matie boy wind up hunky-dory, he
                    lost his bottle the full monty bugger all mate cheeky bugger
                    cras chancer, absolutely bladdered amongst tomfoolery pukka.
                    Knackered
                  </p>
                  <p>
                    James Bond old happy days the wireless cracking goal bloke
                    me old mucker, arse over tit blower mush the bee's knees
                    chip shop the BBC, say lemon squeezy blatant what a load of
                    rubbish bog-standard nancy boy. Mush spiffing good time
                    brown bread cheeky bite your arm off chip shop bugger all
                    mate, my lady down the pub is faff about pukka.
                  </p>
                  <blockquote>
                    <p>
                      I don't want no agro brilliant are you taking the piss
                      skive off super boot chancer don't get shirty.
                    </p>
                    <cite>Indigo Violet</cite>
                  </blockquote>
                  <p>
                    That faff about the full monty blower bubble and squeak
                    cheeky old matie boy burke, the bee's knees what a load of
                    rubbish golly gosh mufty is Elizabeth squiffy, lurgy chimney
                    pot Jeffrey Richard naff Queen's English cheesed off. Old
                    bonnet cheesed off lurgy me old mucker a blinding shot bits
                    and bobs lavatory barney, say no biggie jolly good mush
                    chancer pukka what a load of rubbish, Harry don't get shirty
                    with me arse over tit he lost his bottle spiffing good time
                    bubble and squeak say. I bog Harry a load of old tosh quaint
                    brown bread get stuffed mate bobby, lemon squeezy boot bum
                    bag chimney pot codswallop amongst, lavatory twit bits and
                    bobs pardon you daft ummm I'm telling. Blatant matie boy say
                    bugger all mate butty gormless, you mug pukka happy days
                    bobby. Down the pub what a load of rubbish geeza faff about
                    chancer bits and bobs daft lavatory boot victoria sponge
                    spend a penny grub ummm I'm telling, absolutely bladdered A
                    bit of how's your father arse over tit do one chimney pot
                    tomfoolery porkies owt to do with me spiffing good time
                    zonked.
                  </p>
                  <div className="post-tags">
                    <h5>Tags:</h5>
                    <a href="#">Bisy LMS</a>
                    <a href="#">Design</a>
                    <a href="#">General</a>
                  </div>
                  <div className="post-share">
                    <h5>Share:</h5>
                    <a className="fac" href="#">
                      <i className="social_facebook"></i>
                    </a>
                    <a className="twi" href="#">
                      <i className="social_twitter"></i>
                    </a>
                    <a className="goo" href="#">
                      <i className="social_googleplus"></i>
                    </a>
                  </div>
                  <div className="post-admin">
                    <img src="assets/images/single-post/author.png" alt="" />
                    <a href="#">Justin Case</a>
                    <span>About Author</span>
                    <p>
                      Me old mucker bits and bobs you mug tickety-boo a load of
                      old tosh bender mufty bloke old daft.
                    </p>
                  </div>
                </div>
                <Comment />
                <div className="comment-form-area">
                  <h3>Post a Comment</h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked
                  </p>
                  <div className="comment-form">
                    <CommentForm />
                  </div>
                </div>
              </div>
              <DetailsSideBar />
            </div>
          </div>
        </section>
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default SinglePost;
