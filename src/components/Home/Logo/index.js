// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import LogoY from '../../../assets/images/Y.png'
// import './index.scss'

// const Logo = () => {


//     const bgRef = useRef()
//     const outlineLogoRef = useRef()
//     const solidLogoRef = useRef()

//     useEffect(() => {
//         gsap.registerPlugin(DrawSVGPlugin)

//         gsap
//             .timeline()
//             .to(bgRef.current, {
//                 duration: 1,
//                 opacity: 1,
//             })
//             .from(outlineLogoRef.current, {
//                 drawSVG: 0,
//                 duration: 15,
//             })

//         gsap.fromTo(
//             solidLogoRef.current,
//             {
//                 opacity: 0,
//             },
//             {
//                 opacity: 1,
//                 delay: 4,
//                 duration: 4,
//             }
//         )
//     }, [])


//     return (
//         <div className="logo-container" ref={bgRef}>
//             <img 
//             className='solid-logo'
//             ref={solidLogoRef}  
//             src={LogoY} 
//             alt='Y' 
//             />
            
//             <svg
//                 width="559pt"
//                 height="752"
//                 version="1.0"
//                 viewBox="0 0 810 809.999993"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <g
//                     className="svg-container"
//                     transform="matrix(0.75, 0, 0, 0.75, 65.289667, -268.669918)"
//                     fill="none"
//                 >
//                     <path
//                         ref={outlineLogoRef}
//                         d="M 576.822139 1244.731828 C 554.603388 1259.018287 533.369012 1270.825579 513.129428 1280.153705 C 492.889843 1289.476622 471.462759 1296.820372 448.837758 1302.179747 C 426.217965 1307.533914 401.613797 1311.304748 375.025254 1313.48704 C 348.436711 1315.669331 318.077334 1316.763081 283.947124 1316.763081 C 290.691916 1311.20579 296.15025 1305.747456 300.316917 1300.393289 C 304.483584 1295.033914 307.759626 1288.882872 310.139834 1281.940163 C 312.520043 1274.992246 314.306501 1266.757871 315.499209 1257.231828 C 316.686709 1247.710995 317.681501 1236.200577 318.473168 1222.705785 C 318.473168 1211.200576 318.869001 1193.737034 319.665876 1170.325574 C 320.457543 1150.481823 321.452335 1123.497447 322.639835 1089.367237 C 323.832543 1055.237027 325.619001 1011.580774 327.99921 958.403688 C 284.743999 883.002643 247.832539 819.309931 217.275246 767.320346 C 186.717953 715.33076 161.22316 672.471382 140.785659 638.742214 C 120.34295 605.007837 104.374199 579.112003 92.863781 561.05471 C 81.353364 542.997418 72.822114 530.002625 67.264822 522.065125 C 55.759613 523.257833 41.967946 524.945333 25.895028 527.127625 C 9.822111 529.309917 -7.74039 531.987 -26.787266 535.164084 C -5.354973 515.320333 13.889819 500.236999 30.95232 489.91929 C 48.020029 479.601581 62.702322 472.059914 75.004406 467.299497 C 89.290865 461.742205 101.988782 458.768247 113.103366 458.372413 C 127.389825 458.768247 142.868992 458.57033 159.53566 457.773455 C 176.202327 456.981788 192.473161 455.690122 208.348162 453.908871 C 224.223163 452.122413 238.60858 450.138038 251.504414 447.955746 C 264.400248 445.768246 274.025249 443.289079 280.374208 440.513037 C 263.311707 454.00783 247.634623 465.117205 233.348164 473.846372 C 219.061704 482.580748 205.171079 490.117207 191.681495 496.466165 L 415.504423 868.518267 C 446.457549 818.117223 472.650259 773.372429 494.082552 734.283886 C 515.509636 695.190134 533.072137 661.263049 546.764846 632.492214 C 560.452347 603.716171 570.775264 580.007836 577.717973 561.351585 C 584.660681 542.700543 589.525265 528.809917 592.301307 519.684916 C 580.790889 520.476583 564.822139 521.570333 544.379429 522.960958 C 523.941928 524.346375 500.233594 526.825542 473.244009 530.398459 C 489.915885 516.908875 505.092969 505.596374 518.785678 496.466165 C 532.478387 487.341165 546.165888 479.997414 559.858597 474.445331 C 573.551306 468.888039 587.738806 464.82033 602.421099 462.242205 C 617.103391 459.658872 633.775267 458.372413 652.42631 458.372413 C 665.124227 458.372413 678.119019 458.075538 691.415895 457.47658 C 704.712771 456.88283 717.31173 455.992205 729.21798 454.799496 C 741.119022 453.606788 751.837773 452.221371 761.358607 450.63283 C 770.884649 449.044288 778.426316 447.257829 783.983608 445.273454 C 758.978398 463.528664 736.853397 477.617206 717.608605 487.539081 C 698.358604 497.460957 679.806519 504.804707 661.947143 509.565124 C 638.931517 561.153668 615.619016 608.382838 592.004432 651.242215 C 568.389847 694.101592 546.066929 732.200552 525.035678 765.533887 C 504.004427 798.87243 484.853385 827.247432 467.592967 850.658891 C 450.327341 874.075559 436.73359 892.132852 426.816923 904.830769 C 426.020048 940.544313 425.228382 972.393272 424.431506 1000.372441 C 423.63984 1028.351609 422.947131 1053.054735 422.348173 1074.481819 C 421.754423 1095.914112 421.259631 1114.26828 420.863798 1129.54953 C 420.462756 1144.825573 420.26484 1157.825573 420.26484 1168.539116 C 419.473173 1193.143284 419.275256 1209.612034 419.67109 1217.945368 C 419.67109 1222.705785 419.07734 1227.47141 417.884631 1232.231827 C 417.092964 1236.596411 415.504423 1241.065161 413.124214 1245.627661 C 410.744006 1250.190161 407.566922 1254.059953 403.598172 1257.231828 C 411.535672 1258.028704 419.176298 1258.424537 426.51484 1258.424537 C 433.85859 1258.424537 440.900257 1258.424537 447.650258 1258.424537 C 470.665884 1258.424537 490.410676 1257.830787 506.879427 1256.638078 C 523.348178 1255.450578 536.744012 1253.862037 547.061721 1251.877662 C 559.363805 1249.893286 569.28568 1247.513078 576.822139 1244.731828 Z M 576.822139 1244.731828"
//                     />
//                 </g>
//             </svg>

//         </div>
//     )
// }

// export default Logo


