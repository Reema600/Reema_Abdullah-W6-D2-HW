

export default function Navbar() {
  return (
    <div>
 <nav className="navBar ">
    
    <ul>
    <li>اشترك في النشرة</li>
    <li>أخبارالأكاديمية</li>
    <li>حول الأكاديمية</li>
    <li>المعسكرات والبرامج</li>
      <li>الرئيسية</li>
      
     
      
     
    </ul>
    <img className="img" src="logo_navbar.svg" alt="logo" />
  </nav>


    </div>
  )
}

// <nav class="fixed top-0 z-[9999] flex flex-wrap items-center justify-between transition-all ease-in shadow-none 
// duration-250 lg:flex-nowrap lg:justify-start py-3 lg:px-20 lg:flex hidden w-screen" navbar-main="" navbar-scroll="false" :class="{'bg-primary-500': !true , 'inset-x-0 bg-white shadow-lg drop-shadow-2xl':fixed}" x-on:scroll.window="fixed = window.pageYOffset>30?true:false">
//     <div class="flex flex-col items-start w-full px-4 py-1 mx-auto flex-wrap-inherit">
//         <div class="flex items-center justify-between mt-2 grow sm:mt-0 sm:ml-6 md:ml-0 lg:flex lg:basis-auto">
//             <div class="flex flex-row items-center justify-start flex-1 gap-8 sm:justify-start">
//                 <a class="flex" href="/">
//                     <img alt="Tuwaiq Academy" x-show="!fixed" class="h-12" src="/img/logos/logo.svg">
//                     <img alt="Tuwaiq Academy" x-show="fixed" class="h-14" src="/img/logos/logo_navbar.svg" style="display: none;">
//                 </a>
//                 <div class="absolute sm:hidden top-[4rem] left-10 z-[9999]">
//                     <button type="button" x-on:click="open=!open">
//                         <img alt="" src="/img/menu2.svg">
//                     </button>
//                 </div>
//                 <ul class="items-center hidden gap-6 text-lg text-white sm:flex-1 sm:flex">
//                     <li class="text-center" :class="{'text-black':fixed}">
//                         <a x-on:click="open=false" href="/">الرئيسية</a>
//                     </li>
//                     <li class="text-center " :class="{'text-black':fixed}">
//                         <a x-on:click="open=false" href="/bootcamps">المعسكرات والبرامج</a>
//                     </li>
//                     <li class="text-center " :class="{'text-black':fixed}">
//                         <a x-on:click="open=false" href="/about">حول الأكاديمية</a>
//                     </li>
//                     <li class="text-center " :class="{'text-black':fixed}">
//                         <a href="/#news" x-on:click="open=false">أخبار الأكاديمية</a>
//                     </li>
//                     <li class="text-center " :class="{'text-black':fixed}">
//                         <a href="/#mail" x-on:click="open=false">اشترك في النشرة</a>
//                     </li>
//                 </ul>
//             </div>

//         </div>
//     </div>
// </nav>

