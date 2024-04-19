import facebookicon from './assets/facebook.svg';
import instagramicon from './assets/instagram.svg';
import yelpicon from './assets/instagram.svg';
const Footer = () => {
    return (
    <footer className = "footer pt-24 pb-3 flex flex-col text-white fixed bottom-0 left-0 w-screen md:flex-col-reverse md:justify-between md:flex-wrap-reverse">
        <div className = "socialLinks md:order-2 md:basis-[30%] md:justify-end mx-10 mt-10 flex">
            <a className="group" href="https://www.instagram.com/pokebay_udistrict/" target="_blank" rel="noopener noreferrer">
                {facebookicon}
            </a>
            <a className="group" href="" target="_blank" rel="noopener noreferrer">
            <svg className="mr-3" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="transition-colors ease-in delay-100 group-hover:fill-[#F7613E]" d="M43.9985 23.7541C43.9517 19.9428 42.8167 16.2243 40.7272 13.0364C38.6377 9.84858 35.681 7.32416 32.205 5.76048C28.7287 4.19681 24.8782 3.65901 21.1067 4.21038C17.3353 4.76178 13.7999 6.37938 10.917 8.87276C8.03403 11.3661 5.9236 14.6314 4.83423 18.2839C3.74488 21.9366 3.72193 25.8243 4.76813 29.4896C5.81433 33.1548 7.88608 36.4446 10.7394 38.9718C13.5927 41.4991 17.1088 43.1583 20.8735 43.7541V29.5791H15.8735V23.7541H20.8735V19.3291C20.7577 18.3002 20.8692 17.2584 21.2002 16.2773C21.5312 15.2962 22.0735 14.3997 22.7887 13.6511C23.504 12.9025 24.3747 12.3199 25.3397 11.9447C26.3047 11.5694 27.3405 11.4104 28.3735 11.4791C29.873 11.4997 31.369 11.6334 32.8485 11.8791V16.8791H30.3485C29.9175 16.8248 29.4795 16.868 29.0675 17.0055C28.6552 17.1431 28.2792 17.3715 27.9672 17.6739C27.6552 17.9763 27.4152 18.345 27.265 18.7526C27.1145 19.1603 27.0577 19.5966 27.0985 20.0291V23.8041H32.6485L31.7485 29.6291H27.1235V43.6291C31.8482 42.8818 36.1487 40.4658 39.2447 36.8193C42.3407 33.1728 44.0272 28.5376 43.9985 23.7541Z" fill="#FFFDF9"/>
            </svg>
            </a>
            <a className="group" href="https://www.yelp.com/biz/poke-bay-seattle" target="_blank" rel="noopener noreferrer">
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="transition-colors ease-in delay-100 group-hover:fill-[#F7613E]" d="M19.6576 31.0652L21.6146 30.6129C21.6557 30.6035 21.7237 30.5879 21.8068 30.5611C22.3467 30.4157 22.8095 30.0666 23.0975 29.5868C23.3855 29.1071 23.4764 28.5344 23.3509 27.9894C23.3482 27.9775 23.3456 27.9661 23.3428 27.9541C23.2785 27.6929 23.1659 27.446 23.0108 27.2264C22.7915 26.948 22.5201 26.7153 22.2118 26.5411C21.8489 26.334 21.469 26.158 21.0763 26.0152L18.9306 25.2319C17.7264 24.7843 16.5223 24.3478 15.3069 23.9222C14.5187 23.6417 13.8509 23.3955 13.2706 23.216C13.1611 23.1823 13.0403 23.1486 12.942 23.1146C12.2405 22.8996 11.7476 22.8105 11.3305 22.8076C11.0519 22.7973 10.7744 22.848 10.5172 22.9559C10.2492 23.0715 10.0086 23.2423 9.81092 23.4572C9.71261 23.569 9.62018 23.6858 9.53401 23.8071C9.45314 23.9309 9.37898 24.0587 9.31185 24.1903C9.23792 24.3316 9.17439 24.478 9.12177 24.6283C8.72352 25.8056 8.52515 27.0411 8.53489 28.2838C8.54207 29.4071 8.57224 30.8489 9.18969 31.8263C9.33848 32.0771 9.53814 32.2939 9.77582 32.4628C10.2157 32.7664 10.6602 32.8065 11.1227 32.8399C11.8137 32.8894 12.4833 32.7196 13.1507 32.5654L19.6521 31.0632L19.6576 31.0652Z" fill="#FFFDF9"/>
                    <path className="transition-colors ease-in delay-100 group-hover:fill-[#F7613E]" d="M41.4909 20.6752C40.9565 19.5538 40.2382 18.5301 39.3657 17.6465C39.2529 17.5343 39.1321 17.4305 39.004 17.3359C38.8859 17.2473 38.7631 17.1649 38.6362 17.089C38.5059 17.0175 38.3717 16.9531 38.2345 16.8959C37.963 16.7894 37.6721 16.7413 37.3811 16.7549C37.1025 16.7708 36.8307 16.8471 36.5845 16.9786C36.2113 17.1641 35.8074 17.4623 35.2703 17.9616C35.1961 18.0353 35.1028 18.1185 35.0191 18.1969C34.5759 18.6136 34.083 19.1272 33.4964 19.7254C32.5901 20.6412 31.6976 21.5621 30.8106 22.493L29.2237 24.1387C28.9332 24.4394 28.6685 24.7642 28.4327 25.1097C28.2318 25.4016 28.0896 25.7299 28.0142 26.0763C27.9706 26.3417 27.977 26.6132 28.0331 26.8763C28.0358 26.8882 28.0385 26.8996 28.0412 26.9116C28.1667 27.4568 28.4984 27.9318 28.9671 28.2365C29.4355 28.5415 30.004 28.6525 30.5531 28.5461C30.64 28.5336 30.7075 28.5186 30.7485 28.5085L39.2099 26.5536C39.8767 26.3994 40.5534 26.2583 41.1525 25.9105C41.5543 25.6774 41.9366 25.4465 42.1988 24.9805C42.3387 24.7245 42.4235 24.4419 42.4476 24.1512C42.5774 22.998 41.9753 21.6884 41.4909 20.6752Z" fill="#FFFDF9"/>
                    <path className="transition-colors ease-in delay-100 group-hover:fill-[#F7613E]" d="M26.3467 24.2333C26.9599 23.463 26.9583 22.3149 27.0132 21.3762C27.1978 18.2401 27.3921 15.1035 27.5461 11.9656C27.6049 10.7771 27.7329 9.60468 27.6622 8.40711C27.6039 7.41916 27.5968 6.28486 26.973 5.4741C25.872 4.04438 23.5241 4.16188 21.9222 4.38366C21.4315 4.45178 20.9399 4.54336 20.4522 4.66042C19.9646 4.77749 19.482 4.90534 19.0098 5.05657C17.4726 5.56008 15.3116 6.48433 14.9457 8.25551C14.7394 9.25682 15.2282 10.2811 15.6075 11.1949C16.0671 12.3026 16.695 13.3004 17.2672 14.3431C18.7801 17.0958 20.321 19.8314 21.8576 22.5699C22.3165 23.3874 22.8167 24.4228 23.7045 24.8463C23.7632 24.872 23.8231 24.8947 23.8841 24.9142C24.2822 25.0649 24.7162 25.094 25.1309 24.9977C25.156 24.9919 25.1804 24.9863 25.2049 24.9805C25.5879 24.8764 25.9347 24.6682 26.2068 24.3788C26.2559 24.3328 26.3026 24.2842 26.3467 24.2333Z" fill="#FFFDF9"/>
                    <path className="transition-colors ease-in delay-100 group-hover:fill-[#F7613E]" d="M25.6125 32.6293C25.3732 32.2927 25.0335 32.0404 24.6421 31.9085C24.2507 31.7767 23.8276 31.7718 23.4333 31.8952C23.3406 31.9259 23.2504 31.9635 23.1632 32.0072C23.0283 32.0758 22.8996 32.156 22.7785 32.247C22.4259 32.5082 22.129 32.8477 21.8586 33.1882C21.79 33.2749 21.7274 33.3906 21.6458 33.4648L20.2848 35.3371C19.5134 36.3858 18.7526 37.4372 17.9982 38.5054C17.506 39.1949 17.0802 39.7773 16.7439 40.2926C16.6802 40.3896 16.614 40.4979 16.5534 40.5843C16.1504 41.2079 15.9221 41.6631 15.8049 42.0685C15.7169 42.338 15.6891 42.6233 15.7233 42.9045C15.7608 43.1976 15.8594 43.4792 16.0128 43.7316C16.0944 43.858 16.1823 43.9804 16.2762 44.098C16.3738 44.2114 16.4775 44.3191 16.5867 44.4211C16.7034 44.5324 16.8282 44.6349 16.9601 44.7278C17.8995 45.3814 18.9279 45.851 20.0096 46.2138C20.9098 46.5126 21.8455 46.6915 22.7925 46.7456C22.9536 46.7539 23.1151 46.7503 23.2758 46.7352C23.4246 46.7223 23.5727 46.7015 23.7194 46.673C23.866 46.6388 24.0107 46.5966 24.1528 46.5471C24.4294 46.4436 24.6812 46.2834 24.892 46.0765C25.0916 45.8766 25.2452 45.6356 25.3421 45.3702C25.4994 44.9781 25.6029 44.4801 25.6709 43.741C25.6769 43.6359 25.6919 43.5099 25.7023 43.3942C25.756 42.781 25.7806 42.0606 25.8201 41.2135C25.8866 39.9107 25.9388 38.6137 25.9801 37.313C25.9801 37.313 26.0678 35.0016 26.0675 35.0003C26.0876 34.4676 26.0711 33.8774 25.9234 33.347C25.8585 33.0927 25.7536 32.8506 25.6125 32.6293Z" fill="#FFFDF9"/>
                    <path className="transition-colors ease-in delay-100 group-hover:fill-[#F7613E]" d="M40.9752 36.2486C40.691 35.9371 40.2885 35.6265 39.6537 35.2425C39.5621 35.1914 39.4548 35.1232 39.3557 35.0638C38.8271 34.7459 38.1903 34.4114 37.4466 34.0076C36.304 33.3803 35.1606 32.7688 34.0065 32.1623L31.9673 31.0808C31.8616 31.0498 31.7543 30.9734 31.6546 30.9254C31.2629 30.7381 30.8474 30.5632 30.4164 30.483C30.2677 30.4545 30.117 30.4389 29.9659 30.4362C29.8681 30.435 29.7708 30.441 29.674 30.4539C29.2663 30.5171 28.8888 30.7074 28.5954 30.9979C28.302 31.2883 28.1077 31.6638 28.04 32.0711C28.009 32.3302 28.0184 32.5924 28.0682 32.8486C28.1678 33.3913 28.4101 33.928 28.6608 34.3981L29.7498 36.4391C30.3557 37.5902 30.9689 38.7347 31.5977 39.8755C32.0031 40.6196 32.3407 41.2566 32.6568 41.7844C32.7168 41.8837 32.7847 41.9905 32.8359 42.0824C33.2207 42.7171 33.5299 43.1165 33.8434 43.403C34.0464 43.599 34.2899 43.7482 34.5565 43.8404C34.8368 43.9333 35.1336 43.9663 35.4274 43.9372C35.577 43.9194 35.7255 43.8938 35.8722 43.86C36.0168 43.8213 36.1592 43.775 36.2988 43.7212C36.4497 43.6646 36.5962 43.5969 36.7372 43.5188C37.5651 43.0546 38.3282 42.4832 39.0069 41.8195C39.8208 41.0185 40.5403 40.1452 41.0999 39.1453C41.1778 39.0038 41.2451 38.8569 41.3016 38.7058C41.3544 38.5658 41.4001 38.4233 41.4384 38.2788C41.4714 38.1319 41.4968 37.9832 41.5144 37.8338C41.5423 37.54 41.5082 37.2439 41.4143 36.9642C41.322 36.6964 41.172 36.452 40.9752 36.2486Z" fill="#FFFDF9"/>
                </svg>
            </a>
        </div>

        <div className="footerText md:order-3 md:basis-1/2 mb-3 mx-12 md:text-md">
            <p className="text-2xl md:text-4xl md:pt-10 my-8">Poke Bay</p>
            <p>4215 University Way NE</p>
            <p className="mb-2"> Seattle, WA 98105</p>
            <p className="mb-2">(626) 715-8907</p>
            <p>pokebay.info@gmail.com</p>
        </div>

        <div className="copyright md:order-1 md:basis-[30%] md:text-right md:mt-4 mx-12">
            <p className="leading-4 text-sm">&#169; 2024 POKE BAY, ALL RIGHTS RESERVED</p>
        </div>
    </footer>
    )
  }

export default Footer