//监听网页画面变化
export const pageChangeListener = (camera) =>{
    //监听画面变化，更新渲染windows画面
window.addEventListener('resize', () => {
    // console.log('画面变化了');
    //更新摄像头,宽高比
    camera.aspect = window.innerWidth / window.innerHeight;
    //更新摄像机的投影矩阵
    camera.updateProjectionMatrix();
    //更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    //设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio);
})
};
//监听滚动事件
export const pageScrollListener=(callback)=>{
    //设置当前页
let currentpage = 0;
//监听滚动事件
window.addEventListener('scroll',()=>{
    // console.log(window.scrollY);
    //得到下一页
    const newpage = Math.round(window.scrollY / window.innerHeight);
    if(newpage !== currentpage){
        currentpage = newpage;
        //gsap:进行旋转
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
return {
    pageChangeListener,
    pageScrollListener

}