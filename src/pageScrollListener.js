//监听滚动事件
function pageScrollListener(callback) {
    //设置当前页
    let currentpage = 0;
    //监听滚动事件
    window.addEventListener('scroll', () => {
        // console.log(window.scrollY);
        //得到下一页
        const newpage = Math.round(window.scrollY / window.innerHeight);
        if (newpage !== currentpage) {
            currentpage = newpage;
            //gsap:进行旋转1
            // gsap.to(arrgroup[currentpage].rotation,{
            //     z:"+="+Math.PI,
            //     duration:1,
            // });
            callback();
            // gsap.to(`.page${currentpage} h1`,{x:-300},{x:0,rotate:"+=360",duration:1});
            // console.log('改变页面');

        }

    })
}
export default pageScrollListener;