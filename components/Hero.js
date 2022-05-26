import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import RecentArticlesList from "./RecentArticlesList"
import { Transition } from "@headlessui/react"
import Footer from "./Footer"

const Hero = ({ recentArticles, home }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="absolute m-auto left-0 right-0 overflow-x-hidden">
      <div className="hero-background  grid grid-cols-1 gap-4 place-content-center">
        <div>
          {/* {home.heading} */}
          <svg
            id="animate"
            width="600"
            height="105"
            viewBox="0 0 1139 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_11_24"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1139"
              height="149"
              fill="black"
            >
              <rect fill="white" width="1139" height="149" />
              <path d="M77.76 68.24C77.76 70.6667 77.62 73.2333 77.34 75.94H16.02C16.4867 83.5 19.0533 89.4267 23.72 93.72C28.48 97.92 34.22 100.02 40.94 100.02C46.4467 100.02 51.02 98.76 54.66 96.24C58.3933 93.6267 61.0067 90.1733 62.5 85.88H76.22C74.1667 93.2533 70.06 99.2733 63.9 103.94C57.74 108.513 50.0867 110.8 40.94 110.8C33.66 110.8 27.1267 109.167 21.34 105.9C15.6467 102.633 11.1667 98.0133 7.9 92.04C4.63333 85.9733 3 78.9733 3 71.04C3 63.1067 4.58667 56.1533 7.76 50.18C10.9333 44.2067 15.3667 39.6333 21.06 36.46C26.8467 33.1933 33.4733 31.56 40.94 31.56C48.22 31.56 54.66 33.1467 60.26 36.32C65.86 39.4933 70.1533 43.88 73.14 49.48C76.22 54.9867 77.76 61.24 77.76 68.24ZM64.6 65.58C64.6 60.7267 63.5267 56.5733 61.38 53.12C59.2333 49.5733 56.2933 46.9133 52.56 45.14C48.92 43.2733 44.86 42.34 40.38 42.34C33.94 42.34 28.4333 44.3933 23.86 48.5C19.38 52.6067 16.8133 58.3 16.16 65.58H64.6Z" />
              <path d="M107.316 5.94V109.54H94.5764V5.94H107.316Z" />
              <path d="M135.61 20.36C133.183 20.36 131.13 19.52 129.45 17.84C127.77 16.16 126.93 14.1067 126.93 11.68C126.93 9.25333 127.77 7.2 129.45 5.52C131.13 3.84 133.183 3 135.61 3C137.943 3 139.903 3.84 141.49 5.52C143.17 7.2 144.01 9.25333 144.01 11.68C144.01 14.1067 143.17 16.16 141.49 17.84C139.903 19.52 137.943 20.36 135.61 20.36ZM141.77 32.82V109.54H129.03V32.82H141.77Z" />
              <path d="M190.643 110.8C184.763 110.8 179.489 109.82 174.823 107.86C170.156 105.807 166.469 103.007 163.763 99.46C161.056 95.82 159.563 91.6667 159.283 87H172.443C172.816 90.8267 174.589 93.9533 177.763 96.38C181.029 98.8067 185.276 100.02 190.503 100.02C195.356 100.02 199.183 98.9467 201.983 96.8C204.783 94.6533 206.183 91.9467 206.183 88.68C206.183 85.32 204.689 82.8467 201.703 81.26C198.716 79.58 194.096 77.9467 187.843 76.36C182.149 74.8667 177.483 73.3733 173.843 71.88C170.296 70.2933 167.216 68.0067 164.603 65.02C162.083 61.94 160.823 57.9267 160.823 52.98C160.823 49.06 161.989 45.4667 164.323 42.2C166.656 38.9333 169.969 36.3667 174.263 34.5C178.556 32.54 183.456 31.56 188.963 31.56C197.456 31.56 204.316 33.7067 209.543 38C214.769 42.2933 217.569 48.1733 217.943 55.64H205.203C204.923 51.6267 203.289 48.4067 200.303 45.98C197.409 43.5533 193.489 42.34 188.543 42.34C183.969 42.34 180.329 43.32 177.623 45.28C174.916 47.24 173.563 49.8067 173.563 52.98C173.563 55.5 174.356 57.6 175.943 59.28C177.623 60.8667 179.676 62.1733 182.103 63.2C184.623 64.1333 188.076 65.2067 192.463 66.42C197.969 67.9133 202.449 69.4067 205.903 70.9C209.356 72.3 212.296 74.4467 214.723 77.34C217.243 80.2333 218.549 84.0133 218.643 88.68C218.643 92.88 217.476 96.66 215.143 100.02C212.809 103.38 209.496 106.04 205.203 108C201.003 109.867 196.149 110.8 190.643 110.8Z" />
              <path d="M231.867 70.9C231.867 63.06 233.454 56.2 236.627 50.32C239.801 44.3467 244.141 39.7267 249.647 36.46C255.247 33.1933 261.454 31.56 268.267 31.56C274.987 31.56 280.821 33.0067 285.767 35.9C290.714 38.7933 294.401 42.4333 296.827 46.82V32.82H309.707V109.54H296.827V95.26C294.307 99.74 290.527 103.473 285.487 106.46C280.541 109.353 274.754 110.8 268.127 110.8C261.314 110.8 255.154 109.12 249.647 105.76C244.141 102.4 239.801 97.6867 236.627 91.62C233.454 85.5533 231.867 78.6467 231.867 70.9ZM296.827 71.04C296.827 65.2533 295.661 60.2133 293.327 55.92C290.994 51.6267 287.821 48.36 283.807 46.12C279.887 43.7867 275.547 42.62 270.787 42.62C266.027 42.62 261.687 43.74 257.767 45.98C253.847 48.22 250.721 51.4867 248.387 55.78C246.054 60.0733 244.887 65.1133 244.887 70.9C244.887 76.78 246.054 81.9133 248.387 86.3C250.721 90.5933 253.847 93.9067 257.767 96.24C261.687 98.48 266.027 99.6 270.787 99.6C275.547 99.6 279.887 98.48 283.807 96.24C287.821 93.9067 290.994 90.5933 293.327 86.3C295.661 81.9133 296.827 76.8267 296.827 71.04Z" />
              <path d="M343.977 47.1C346.59 42.5267 350.417 38.7933 355.457 35.9C360.497 33.0067 366.237 31.56 372.677 31.56C379.583 31.56 385.79 33.1933 391.297 36.46C396.803 39.7267 401.143 44.3467 404.317 50.32C407.49 56.2 409.077 63.06 409.077 70.9C409.077 78.6467 407.49 85.5533 404.317 91.62C401.143 97.6867 396.757 102.4 391.157 105.76C385.65 109.12 379.49 110.8 372.677 110.8C366.05 110.8 360.217 109.353 355.177 106.46C350.23 103.567 346.497 99.88 343.977 95.4V109.54H331.237V5.94H343.977V47.1ZM396.057 70.9C396.057 65.1133 394.89 60.0733 392.557 55.78C390.223 51.4867 387.05 48.22 383.037 45.98C379.117 43.74 374.777 42.62 370.017 42.62C365.35 42.62 361.01 43.7867 356.997 46.12C353.077 48.36 349.903 51.6733 347.477 56.06C345.143 60.3533 343.977 65.3467 343.977 71.04C343.977 76.8267 345.143 81.9133 347.477 86.3C349.903 90.5933 353.077 93.9067 356.997 96.24C361.01 98.48 365.35 99.6 370.017 99.6C374.777 99.6 379.117 98.48 383.037 96.24C387.05 93.9067 390.223 90.5933 392.557 86.3C394.89 81.9133 396.057 76.78 396.057 70.9Z" />
              <path d="M495.846 68.24C495.846 70.6667 495.706 73.2333 495.426 75.94H434.106C434.573 83.5 437.139 89.4267 441.806 93.72C446.566 97.92 452.306 100.02 459.026 100.02C464.533 100.02 469.106 98.76 472.746 96.24C476.479 93.6267 479.093 90.1733 480.586 85.88H494.306C492.253 93.2533 488.146 99.2733 481.986 103.94C475.826 108.513 468.173 110.8 459.026 110.8C451.746 110.8 445.213 109.167 439.426 105.9C433.733 102.633 429.253 98.0133 425.986 92.04C422.719 85.9733 421.086 78.9733 421.086 71.04C421.086 63.1067 422.673 56.1533 425.846 50.18C429.019 44.2067 433.453 39.6333 439.146 36.46C444.933 33.1933 451.559 31.56 459.026 31.56C466.306 31.56 472.746 33.1467 478.346 36.32C483.946 39.4933 488.239 43.88 491.226 49.48C494.306 54.9867 495.846 61.24 495.846 68.24ZM482.686 65.58C482.686 60.7267 481.613 56.5733 479.466 53.12C477.319 49.5733 474.379 46.9133 470.646 45.14C467.006 43.2733 462.946 42.34 458.466 42.34C452.026 42.34 446.519 44.3933 441.946 48.5C437.466 52.6067 434.899 58.3 434.246 65.58H482.686Z" />
              <path d="M528.202 43.32V88.54C528.202 92.2733 528.996 94.9333 530.582 96.52C532.169 98.0133 534.922 98.76 538.842 98.76H548.222V109.54H536.742C529.649 109.54 524.329 107.907 520.782 104.64C517.236 101.373 515.462 96.0067 515.462 88.54V43.32H505.522V32.82H515.462V13.5H528.202V32.82H548.222V43.32H528.202Z" />
              <path d="M601.738 31.42C607.525 31.42 612.752 32.68 617.418 35.2C622.085 37.6267 625.725 41.3133 628.338 46.26C631.045 51.2067 632.398 57.2267 632.398 64.32V109.54H619.798V66.14C619.798 58.4867 617.885 52.6533 614.058 48.64C610.232 44.5333 605.005 42.48 598.378 42.48C591.658 42.48 586.292 44.58 582.278 48.78C578.358 52.98 576.398 59.0933 576.398 67.12V109.54H563.658V5.94H576.398V43.74C578.918 39.82 582.372 36.7867 586.758 34.64C591.238 32.4933 596.232 31.42 601.738 31.42Z" />
              <path d="M685.773 70.9C685.773 63.06 687.36 56.2 690.533 50.32C693.707 44.3467 698.047 39.7267 703.553 36.46C709.153 33.1933 715.36 31.56 722.173 31.56C728.893 31.56 734.727 33.0067 739.673 35.9C744.62 38.7933 748.307 42.4333 750.733 46.82V32.82H763.613V109.54H750.733V95.26C748.213 99.74 744.433 103.473 739.393 106.46C734.447 109.353 728.66 110.8 722.033 110.8C715.22 110.8 709.06 109.12 703.553 105.76C698.047 102.4 693.707 97.6867 690.533 91.62C687.36 85.5533 685.773 78.6467 685.773 70.9ZM750.733 71.04C750.733 65.2533 749.567 60.2133 747.233 55.92C744.9 51.6267 741.727 48.36 737.713 46.12C733.793 43.7867 729.453 42.62 724.693 42.62C719.933 42.62 715.593 43.74 711.673 45.98C707.753 48.22 704.627 51.4867 702.293 55.78C699.96 60.0733 698.793 65.1133 698.793 70.9C698.793 76.78 699.96 81.9133 702.293 86.3C704.627 90.5933 707.753 93.9067 711.673 96.24C715.593 98.48 719.933 99.6 724.693 99.6C729.453 99.6 733.793 98.48 737.713 96.24C741.727 93.9067 744.9 90.5933 747.233 86.3C749.567 81.9133 750.733 76.8267 750.733 71.04Z" />
              <path d="M812.303 110.8C806.423 110.8 801.149 109.82 796.483 107.86C791.816 105.807 788.129 103.007 785.423 99.46C782.716 95.82 781.223 91.6667 780.943 87H794.103C794.476 90.8267 796.249 93.9533 799.423 96.38C802.689 98.8067 806.936 100.02 812.163 100.02C817.016 100.02 820.843 98.9467 823.643 96.8C826.443 94.6533 827.843 91.9467 827.843 88.68C827.843 85.32 826.349 82.8467 823.363 81.26C820.376 79.58 815.756 77.9467 809.503 76.36C803.809 74.8667 799.143 73.3733 795.503 71.88C791.956 70.2933 788.876 68.0067 786.263 65.02C783.743 61.94 782.483 57.9267 782.483 52.98C782.483 49.06 783.649 45.4667 785.983 42.2C788.316 38.9333 791.629 36.3667 795.923 34.5C800.216 32.54 805.116 31.56 810.623 31.56C819.116 31.56 825.976 33.7067 831.203 38C836.429 42.2933 839.229 48.1733 839.603 55.64H826.863C826.583 51.6267 824.949 48.4067 821.963 45.98C819.069 43.5533 815.149 42.34 810.203 42.34C805.629 42.34 801.989 43.32 799.283 45.28C796.576 47.24 795.223 49.8067 795.223 52.98C795.223 55.5 796.016 57.6 797.603 59.28C799.283 60.8667 801.336 62.1733 803.763 63.2C806.283 64.1333 809.736 65.2067 814.123 66.42C819.629 67.9133 824.109 69.4067 827.563 70.9C831.016 72.3 833.956 74.4467 836.383 77.34C838.903 80.2333 840.209 84.0133 840.303 88.68C840.303 92.88 839.136 96.66 836.803 100.02C834.469 103.38 831.156 106.04 826.863 108C822.663 109.867 817.809 110.8 812.303 110.8Z" />
              <path d="M896.367 31.42C902.154 31.42 907.381 32.68 912.047 35.2C916.714 37.6267 920.354 41.3133 922.967 46.26C925.674 51.2067 927.027 57.2267 927.027 64.32V109.54H914.427V66.14C914.427 58.4867 912.514 52.6533 908.687 48.64C904.861 44.5333 899.634 42.48 893.007 42.48C886.287 42.48 880.921 44.58 876.907 48.78C872.987 52.98 871.027 59.0933 871.027 67.12V109.54H858.287V5.94H871.027V43.74C873.547 39.82 877.001 36.7867 881.387 34.64C885.867 32.4933 890.861 31.42 896.367 31.42Z" />
              <path d="M960.578 5.94V109.54H947.838V5.94H960.578Z" />
              <path d="M1052.29 68.24C1052.29 70.6667 1052.15 73.2333 1051.87 75.94H990.551C991.018 83.5 993.585 89.4267 998.251 93.72C1003.01 97.92 1008.75 100.02 1015.47 100.02C1020.98 100.02 1025.55 98.76 1029.19 96.24C1032.92 93.6267 1035.54 90.1733 1037.03 85.88H1050.75C1048.7 93.2533 1044.59 99.2733 1038.43 103.94C1032.27 108.513 1024.62 110.8 1015.47 110.8C1008.19 110.8 1001.66 109.167 995.871 105.9C990.178 102.633 985.698 98.0133 982.431 92.04C979.165 85.9733 977.531 78.9733 977.531 71.04C977.531 63.1067 979.118 56.1533 982.291 50.18C985.465 44.2067 989.898 39.6333 995.591 36.46C1001.38 33.1933 1008 31.56 1015.47 31.56C1022.75 31.56 1029.19 33.1467 1034.79 36.32C1040.39 39.4933 1044.68 43.88 1047.67 49.48C1050.75 54.9867 1052.29 61.24 1052.29 68.24ZM1039.13 65.58C1039.13 60.7267 1038.06 56.5733 1035.91 53.12C1033.76 49.5733 1030.82 46.9133 1027.09 45.14C1023.45 43.2733 1019.39 42.34 1014.91 42.34C1008.47 42.34 1002.96 44.3933 998.391 48.5C993.911 52.6067 991.345 58.3 990.691 65.58H1039.13Z" />
              <path d="M1135.19 32.82L1088.99 145.66H1075.83L1090.95 108.7L1060.01 32.82H1074.15L1098.23 94.98L1122.03 32.82H1135.19Z" />
            </mask>
            <path
              d="M77.76 68.24C77.76 70.6667 77.62 73.2333 77.34 75.94H16.02C16.4867 83.5 19.0533 89.4267 23.72 93.72C28.48 97.92 34.22 100.02 40.94 100.02C46.4467 100.02 51.02 98.76 54.66 96.24C58.3933 93.6267 61.0067 90.1733 62.5 85.88H76.22C74.1667 93.2533 70.06 99.2733 63.9 103.94C57.74 108.513 50.0867 110.8 40.94 110.8C33.66 110.8 27.1267 109.167 21.34 105.9C15.6467 102.633 11.1667 98.0133 7.9 92.04C4.63333 85.9733 3 78.9733 3 71.04C3 63.1067 4.58667 56.1533 7.76 50.18C10.9333 44.2067 15.3667 39.6333 21.06 36.46C26.8467 33.1933 33.4733 31.56 40.94 31.56C48.22 31.56 54.66 33.1467 60.26 36.32C65.86 39.4933 70.1533 43.88 73.14 49.48C76.22 54.9867 77.76 61.24 77.76 68.24ZM64.6 65.58C64.6 60.7267 63.5267 56.5733 61.38 53.12C59.2333 49.5733 56.2933 46.9133 52.56 45.14C48.92 43.2733 44.86 42.34 40.38 42.34C33.94 42.34 28.4333 44.3933 23.86 48.5C19.38 52.6067 16.8133 58.3 16.16 65.58H64.6Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M107.316 5.94V109.54H94.5764V5.94H107.316Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M135.61 20.36C133.183 20.36 131.13 19.52 129.45 17.84C127.77 16.16 126.93 14.1067 126.93 11.68C126.93 9.25333 127.77 7.2 129.45 5.52C131.13 3.84 133.183 3 135.61 3C137.943 3 139.903 3.84 141.49 5.52C143.17 7.2 144.01 9.25333 144.01 11.68C144.01 14.1067 143.17 16.16 141.49 17.84C139.903 19.52 137.943 20.36 135.61 20.36ZM141.77 32.82V109.54H129.03V32.82H141.77Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M190.643 110.8C184.763 110.8 179.489 109.82 174.823 107.86C170.156 105.807 166.469 103.007 163.763 99.46C161.056 95.82 159.563 91.6667 159.283 87H172.443C172.816 90.8267 174.589 93.9533 177.763 96.38C181.029 98.8067 185.276 100.02 190.503 100.02C195.356 100.02 199.183 98.9467 201.983 96.8C204.783 94.6533 206.183 91.9467 206.183 88.68C206.183 85.32 204.689 82.8467 201.703 81.26C198.716 79.58 194.096 77.9467 187.843 76.36C182.149 74.8667 177.483 73.3733 173.843 71.88C170.296 70.2933 167.216 68.0067 164.603 65.02C162.083 61.94 160.823 57.9267 160.823 52.98C160.823 49.06 161.989 45.4667 164.323 42.2C166.656 38.9333 169.969 36.3667 174.263 34.5C178.556 32.54 183.456 31.56 188.963 31.56C197.456 31.56 204.316 33.7067 209.543 38C214.769 42.2933 217.569 48.1733 217.943 55.64H205.203C204.923 51.6267 203.289 48.4067 200.303 45.98C197.409 43.5533 193.489 42.34 188.543 42.34C183.969 42.34 180.329 43.32 177.623 45.28C174.916 47.24 173.563 49.8067 173.563 52.98C173.563 55.5 174.356 57.6 175.943 59.28C177.623 60.8667 179.676 62.1733 182.103 63.2C184.623 64.1333 188.076 65.2067 192.463 66.42C197.969 67.9133 202.449 69.4067 205.903 70.9C209.356 72.3 212.296 74.4467 214.723 77.34C217.243 80.2333 218.549 84.0133 218.643 88.68C218.643 92.88 217.476 96.66 215.143 100.02C212.809 103.38 209.496 106.04 205.203 108C201.003 109.867 196.149 110.8 190.643 110.8Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M231.867 70.9C231.867 63.06 233.454 56.2 236.627 50.32C239.801 44.3467 244.141 39.7267 249.647 36.46C255.247 33.1933 261.454 31.56 268.267 31.56C274.987 31.56 280.821 33.0067 285.767 35.9C290.714 38.7933 294.401 42.4333 296.827 46.82V32.82H309.707V109.54H296.827V95.26C294.307 99.74 290.527 103.473 285.487 106.46C280.541 109.353 274.754 110.8 268.127 110.8C261.314 110.8 255.154 109.12 249.647 105.76C244.141 102.4 239.801 97.6867 236.627 91.62C233.454 85.5533 231.867 78.6467 231.867 70.9ZM296.827 71.04C296.827 65.2533 295.661 60.2133 293.327 55.92C290.994 51.6267 287.821 48.36 283.807 46.12C279.887 43.7867 275.547 42.62 270.787 42.62C266.027 42.62 261.687 43.74 257.767 45.98C253.847 48.22 250.721 51.4867 248.387 55.78C246.054 60.0733 244.887 65.1133 244.887 70.9C244.887 76.78 246.054 81.9133 248.387 86.3C250.721 90.5933 253.847 93.9067 257.767 96.24C261.687 98.48 266.027 99.6 270.787 99.6C275.547 99.6 279.887 98.48 283.807 96.24C287.821 93.9067 290.994 90.5933 293.327 86.3C295.661 81.9133 296.827 76.8267 296.827 71.04Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M343.977 47.1C346.59 42.5267 350.417 38.7933 355.457 35.9C360.497 33.0067 366.237 31.56 372.677 31.56C379.583 31.56 385.79 33.1933 391.297 36.46C396.803 39.7267 401.143 44.3467 404.317 50.32C407.49 56.2 409.077 63.06 409.077 70.9C409.077 78.6467 407.49 85.5533 404.317 91.62C401.143 97.6867 396.757 102.4 391.157 105.76C385.65 109.12 379.49 110.8 372.677 110.8C366.05 110.8 360.217 109.353 355.177 106.46C350.23 103.567 346.497 99.88 343.977 95.4V109.54H331.237V5.94H343.977V47.1ZM396.057 70.9C396.057 65.1133 394.89 60.0733 392.557 55.78C390.223 51.4867 387.05 48.22 383.037 45.98C379.117 43.74 374.777 42.62 370.017 42.62C365.35 42.62 361.01 43.7867 356.997 46.12C353.077 48.36 349.903 51.6733 347.477 56.06C345.143 60.3533 343.977 65.3467 343.977 71.04C343.977 76.8267 345.143 81.9133 347.477 86.3C349.903 90.5933 353.077 93.9067 356.997 96.24C361.01 98.48 365.35 99.6 370.017 99.6C374.777 99.6 379.117 98.48 383.037 96.24C387.05 93.9067 390.223 90.5933 392.557 86.3C394.89 81.9133 396.057 76.78 396.057 70.9Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M495.846 68.24C495.846 70.6667 495.706 73.2333 495.426 75.94H434.106C434.573 83.5 437.139 89.4267 441.806 93.72C446.566 97.92 452.306 100.02 459.026 100.02C464.533 100.02 469.106 98.76 472.746 96.24C476.479 93.6267 479.093 90.1733 480.586 85.88H494.306C492.253 93.2533 488.146 99.2733 481.986 103.94C475.826 108.513 468.173 110.8 459.026 110.8C451.746 110.8 445.213 109.167 439.426 105.9C433.733 102.633 429.253 98.0133 425.986 92.04C422.719 85.9733 421.086 78.9733 421.086 71.04C421.086 63.1067 422.673 56.1533 425.846 50.18C429.019 44.2067 433.453 39.6333 439.146 36.46C444.933 33.1933 451.559 31.56 459.026 31.56C466.306 31.56 472.746 33.1467 478.346 36.32C483.946 39.4933 488.239 43.88 491.226 49.48C494.306 54.9867 495.846 61.24 495.846 68.24ZM482.686 65.58C482.686 60.7267 481.613 56.5733 479.466 53.12C477.319 49.5733 474.379 46.9133 470.646 45.14C467.006 43.2733 462.946 42.34 458.466 42.34C452.026 42.34 446.519 44.3933 441.946 48.5C437.466 52.6067 434.899 58.3 434.246 65.58H482.686Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M528.202 43.32V88.54C528.202 92.2733 528.996 94.9333 530.582 96.52C532.169 98.0133 534.922 98.76 538.842 98.76H548.222V109.54H536.742C529.649 109.54 524.329 107.907 520.782 104.64C517.236 101.373 515.462 96.0067 515.462 88.54V43.32H505.522V32.82H515.462V13.5H528.202V32.82H548.222V43.32H528.202Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M601.738 31.42C607.525 31.42 612.752 32.68 617.418 35.2C622.085 37.6267 625.725 41.3133 628.338 46.26C631.045 51.2067 632.398 57.2267 632.398 64.32V109.54H619.798V66.14C619.798 58.4867 617.885 52.6533 614.058 48.64C610.232 44.5333 605.005 42.48 598.378 42.48C591.658 42.48 586.292 44.58 582.278 48.78C578.358 52.98 576.398 59.0933 576.398 67.12V109.54H563.658V5.94H576.398V43.74C578.918 39.82 582.372 36.7867 586.758 34.64C591.238 32.4933 596.232 31.42 601.738 31.42Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M685.773 70.9C685.773 63.06 687.36 56.2 690.533 50.32C693.707 44.3467 698.047 39.7267 703.553 36.46C709.153 33.1933 715.36 31.56 722.173 31.56C728.893 31.56 734.727 33.0067 739.673 35.9C744.62 38.7933 748.307 42.4333 750.733 46.82V32.82H763.613V109.54H750.733V95.26C748.213 99.74 744.433 103.473 739.393 106.46C734.447 109.353 728.66 110.8 722.033 110.8C715.22 110.8 709.06 109.12 703.553 105.76C698.047 102.4 693.707 97.6867 690.533 91.62C687.36 85.5533 685.773 78.6467 685.773 70.9ZM750.733 71.04C750.733 65.2533 749.567 60.2133 747.233 55.92C744.9 51.6267 741.727 48.36 737.713 46.12C733.793 43.7867 729.453 42.62 724.693 42.62C719.933 42.62 715.593 43.74 711.673 45.98C707.753 48.22 704.627 51.4867 702.293 55.78C699.96 60.0733 698.793 65.1133 698.793 70.9C698.793 76.78 699.96 81.9133 702.293 86.3C704.627 90.5933 707.753 93.9067 711.673 96.24C715.593 98.48 719.933 99.6 724.693 99.6C729.453 99.6 733.793 98.48 737.713 96.24C741.727 93.9067 744.9 90.5933 747.233 86.3C749.567 81.9133 750.733 76.8267 750.733 71.04Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M812.303 110.8C806.423 110.8 801.149 109.82 796.483 107.86C791.816 105.807 788.129 103.007 785.423 99.46C782.716 95.82 781.223 91.6667 780.943 87H794.103C794.476 90.8267 796.249 93.9533 799.423 96.38C802.689 98.8067 806.936 100.02 812.163 100.02C817.016 100.02 820.843 98.9467 823.643 96.8C826.443 94.6533 827.843 91.9467 827.843 88.68C827.843 85.32 826.349 82.8467 823.363 81.26C820.376 79.58 815.756 77.9467 809.503 76.36C803.809 74.8667 799.143 73.3733 795.503 71.88C791.956 70.2933 788.876 68.0067 786.263 65.02C783.743 61.94 782.483 57.9267 782.483 52.98C782.483 49.06 783.649 45.4667 785.983 42.2C788.316 38.9333 791.629 36.3667 795.923 34.5C800.216 32.54 805.116 31.56 810.623 31.56C819.116 31.56 825.976 33.7067 831.203 38C836.429 42.2933 839.229 48.1733 839.603 55.64H826.863C826.583 51.6267 824.949 48.4067 821.963 45.98C819.069 43.5533 815.149 42.34 810.203 42.34C805.629 42.34 801.989 43.32 799.283 45.28C796.576 47.24 795.223 49.8067 795.223 52.98C795.223 55.5 796.016 57.6 797.603 59.28C799.283 60.8667 801.336 62.1733 803.763 63.2C806.283 64.1333 809.736 65.2067 814.123 66.42C819.629 67.9133 824.109 69.4067 827.563 70.9C831.016 72.3 833.956 74.4467 836.383 77.34C838.903 80.2333 840.209 84.0133 840.303 88.68C840.303 92.88 839.136 96.66 836.803 100.02C834.469 103.38 831.156 106.04 826.863 108C822.663 109.867 817.809 110.8 812.303 110.8Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M896.367 31.42C902.154 31.42 907.381 32.68 912.047 35.2C916.714 37.6267 920.354 41.3133 922.967 46.26C925.674 51.2067 927.027 57.2267 927.027 64.32V109.54H914.427V66.14C914.427 58.4867 912.514 52.6533 908.687 48.64C904.861 44.5333 899.634 42.48 893.007 42.48C886.287 42.48 880.921 44.58 876.907 48.78C872.987 52.98 871.027 59.0933 871.027 67.12V109.54H858.287V5.94H871.027V43.74C873.547 39.82 877.001 36.7867 881.387 34.64C885.867 32.4933 890.861 31.42 896.367 31.42Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M960.578 5.94V109.54H947.838V5.94H960.578Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M1052.29 68.24C1052.29 70.6667 1052.15 73.2333 1051.87 75.94H990.551C991.018 83.5 993.585 89.4267 998.251 93.72C1003.01 97.92 1008.75 100.02 1015.47 100.02C1020.98 100.02 1025.55 98.76 1029.19 96.24C1032.92 93.6267 1035.54 90.1733 1037.03 85.88H1050.75C1048.7 93.2533 1044.59 99.2733 1038.43 103.94C1032.27 108.513 1024.62 110.8 1015.47 110.8C1008.19 110.8 1001.66 109.167 995.871 105.9C990.178 102.633 985.698 98.0133 982.431 92.04C979.165 85.9733 977.531 78.9733 977.531 71.04C977.531 63.1067 979.118 56.1533 982.291 50.18C985.465 44.2067 989.898 39.6333 995.591 36.46C1001.38 33.1933 1008 31.56 1015.47 31.56C1022.75 31.56 1029.19 33.1467 1034.79 36.32C1040.39 39.4933 1044.68 43.88 1047.67 49.48C1050.75 54.9867 1052.29 61.24 1052.29 68.24ZM1039.13 65.58C1039.13 60.7267 1038.06 56.5733 1035.91 53.12C1033.76 49.5733 1030.82 46.9133 1027.09 45.14C1023.45 43.2733 1019.39 42.34 1014.91 42.34C1008.47 42.34 1002.96 44.3933 998.391 48.5C993.911 52.6067 991.345 58.3 990.691 65.58H1039.13Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
            <path
              d="M1135.19 32.82L1088.99 145.66H1075.83L1090.95 108.7L1060.01 32.82H1074.15L1098.23 94.98L1122.03 32.82H1135.19Z"
              stroke="#FF5E62"
              strokeWidth="6"
              strokeLinejoin="round"
              mask="url(#path-1-outside-1_11_24)"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center text-xl  font-medium text-stone-50 font-arimo mt-5">
          <h1 className="w-4/5">{home.introduction}</h1>
        </div>
        {/* Buttons */}
        <div className="flex space-x-8 w-full h-full justify-center content-center items-center mt-5">
          <a className="btn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#FF5E62" />
                  <stop offset="100%" stopColor="#FF9966" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>Blog</span>
          </a>
          <a className="btn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#FF5E62" />
                  <stop offset="100%" stopColor="#FF9966" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>Portfolio</span>
          </a>
          <Link href={`/about`} passHref>
            <a className="btn">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#FF9966" />
                    <stop offset="100%" stopColor="#FF5E62" />
                  </linearGradient>
                </defs>
                <rect
                  x="5"
                  y="5"
                  rx="25"
                  fill="none"
                  stroke="url(#grad1)"
                  width="266"
                  height="50"
                ></rect>
              </svg>
              <span>About</span>
            </a>
          </Link>
        </div>

        {/* <div className="flex space-x-8 w-full h-full justify-center content-center items-center mt-5">
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-royal-250 py-2 px-4 border border-white hover:border-royal-250 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            Blog
          </button>
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-royal-250 py-2 px-4 border border-white hover:border-royal-250 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            Portfolio
          </button>
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-royal-250 py-2 px-4 border border-white hover:border-royal-250 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            About
          </button>
        </div> */}
        {/* Arrow */}
        <div className="flex justify-center items-center">
          <a href="#hero-section-b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-bounce h-10 w-10 text-stark-200 absolute mt-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
      <section id="hero-section-b" className="hero-section-b bg-stone-50">
        <RecentArticlesList recentArticles={recentArticles} />
      </section>
      <section className="hero-section-c bg-teal-500 h-48 -m-10">
        <div>Test</div>
      </section>
      <Footer />
    </div>
  )
}

export default Hero
