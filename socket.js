const style = document.createElement('style');
style.textContent = `
    .menu {
      background-color: #212121;
      width: 800px;
      height: 500px;
      border-radius: 25px;
      z-index: 999;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px 5px black;
    }

    .sidebar {
        float: left;
        width: 200px;
        height: 500px;
        background-color: #131313;
        border-radius: 25px 0 0 25px;
        z-index: 999;
    }

    .search-label {
      margin-top: 15px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      position: relative;
      border: 1px solid transparent;
      border-radius: 12px;
      overflow: hidden;
      background: #3D3D3D;
      padding: 9px;
      cursor: text;
    }

    .search-label:hover {
      border-color: gray;
    }

    .search-label:focus-within {
      background: #464646;
      border-color: gray;
    }

    .search-label input {
      outline: none;
      width: 100%;
      border: none;
      background: none;
      color: rgb(162, 162, 162);
    }

    .search-label input:focus+.slash-icon,
    .search-label input:valid+.slash-icon {
      display: none;
    }

    .search-label input:valid~.search-icon {
      display: block;
    }

    .search-label input:valid {
      width: calc(100% - 22px);
      transform: translateX(20px);
    }

    .search-label svg,
    .slash-icon {
      position: absolute;
      color: #7e7e7e;
    }

    .search-icon {
      display: none;
      width: 12px;
      height: auto;
    }

    .slash-icon {
      right: 7px;
      border: 1px solid #393838;
      background: linear-gradient(-225deg, #343434, #6d6d6d);
      border-radius: 3px;
      text-align: center;
      box-shadow: inset 0 -2px 0 0 #3f3f3f, inset 0 0 1px 1px rgb(94, 93, 93), 0 1px 2px 1px rgba(28, 28, 29, 0.4);
      cursor: pointer;
      font-size: 12px;
      width: 15px;
    }

    .slash-icon:active {
      box-shadow: inset 0 1px 0 0 #3f3f3f, inset 0 0 1px 1px rgb(94, 93, 93), 0 1px 2px 0 rgba(28, 28, 29, 0.4);
      text-shadow: 0 1px 0 #7e7e7e;
      color: transparent;
    }

    /* Remove this container when use*/
    .component-title {
      width: 100%;
      position: absolute;
      z-index: 999;
      top: 30px;
      left: 0;
      padding: 0;
      margin: 0;
      font-size: 1rem;
      font-weight: 700;
      color: #888;
      text-align: center;
    }

    /* The switch - the box around the slider */
    .container {
      width: 51px;
      height: 31px;
      position: relative;
      position: fixed;
      top: 35%;
      margin-left: 200px;
    }

    /* Hide default HTML checkbox left: calc(50% - 27px/2 - 10px - 50px); */
    .checkbox {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }

    .switch {
      width: 100%;
      height: 100%;
      display: block;
      background-color: #e9e9eb;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.2s ease-out;
    }

    /* The slider */
    .slider {
      width: 27px;
      height: 27px;
      position: absolute;
      left: calc(50% - 27px/2 - 10px);
      top: calc(50% - 27px/2);
      border-radius: 50%;
      background: #FFFFFF;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
      transition: all 0.2s ease-out;
      cursor: pointer;
    }

    .checkbox:checked + .switch {
      background-color: #34C759;
    }

    .checkbox:checked + .switch .slider {
      left: calc(50% - 27px/2 + 10px);
      top: calc(50% - 27px/2);
    }

    .card {
      overflow: hidden;
      position: relative;
      text-align: left;
      border-radius: 0.5rem;
      max-width: 290px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      background-color: #fff;
    }

    .dismiss {
      position: absolute;
      right: 10px;
      top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      background-color: #fff;
      color: black;
      border: 2px solid #D1D5DB;
      font-size: 1rem;
      font-weight: 300;
      width: 30px;
      height: 30px;
      border-radius: 7px;
      transition: .3s ease;
    }

    .dismiss:hover {
      background-color: #ee0d0d;
      border: 2px solid #ee0d0d;
      color: #fff;
    }

    .header {
      padding: 1.25rem 1rem 1rem 1rem;
    }

    .image {
      display: flex;
      margin-left: auto;
      margin-right: auto;
      background-color: #e2feee;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
      animation: animate .6s linear alternate-reverse infinite;
      transition: .6s ease;
    }

    .image svg {
      color: #0afa2a;
      width: 2rem;
      height: 2rem;
    }

    .content {
      margin-top: 0.75rem;
      text-align: center;
    }

    .title {
      color: #066e29;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.5rem;
    }

    .message {
      margin-top: 0.5rem;
      color: #595b5f;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    .actions {
      margin: 0.75rem 1rem;
    }

    .history {
      display: inline-flex;
      padding: 0.5rem 1rem;
      background-color: #1aa06d;
      color: #ffffff;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
      justify-content: center;
      width: 100%;
      border-radius: 0.375rem;
      border: none;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    .track {
      display: inline-flex;
      margin-top: 0.75rem;
      padding: 0.5rem 1rem;
      color: #242525;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
      justify-content: center;
      width: 100%;
      border-radius: 0.375rem;
      border: 1px solid #D1D5DB;
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    @keyframes animate {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(1.09);
      }
    }

    .buttons {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      background-color: #000;
      color: #fff;
      font-size: 13px;
      border: 0.5px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 8px;
      height: 65px;
      padding: 12px;
      border-radius: 15px 15px 12px 12px;
      cursor: pointer;
      position: relative;
      will-change: transform;
      transition: all .1s ease-in-out 0s;
      user-select: none;
      /* Add gradient shading to each side */
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
      background-position: bottom right, bottom right;
      background-size: 100% 100%, 100% 100%;
      background-repeat: no-repeat;
      box-shadow: inset -4px -10px 0px rgba(255, 255, 255, 0.4),
        inset -4px -8px 0px rgba(0, 0, 0, 0.3),
        0px 2px 1px rgba(0, 0, 0, 0.3),
        0px 2px 1px rgba(255, 255, 255, 0.1);
      transform: perspective(70px) rotateX(5deg) rotateY(0deg);
    }

    .buttons::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5));
      z-index: -1;
      border-radius: 15px;
      box-shadow: inset 4px 0px 0px rgba(255, 255, 255, 0.1),
        inset 4px -8px 0px rgba(0, 0, 0, 0.3);
      transition: all .1s ease-in-out 0s;
    }

    .buttons::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
      background-position: bottom right, bottom right;
      background-size: 100% 100%, 100% 100%;
      background-repeat: no-repeat;
      z-index: -1;
      border-radius: 15px;
      transition: all .1s ease-in-out 0s;
    }

    .buttons:active {
      will-change: transform;
      transform: perspective(80px) rotateX(5deg) rotateY(1deg) translateY(3px) scale(0.96);
      height: 64px;
      border: 0.25px solid rgba(0, 0, 0, 0.2);
      box-shadow: inset -4px -8px 0px rgba(255, 255, 255, 0.2),
        inset -4px -6px 0px rgba(0, 0, 0, 0.8),
        0px 1px 0px rgba(0, 0, 0, 0.9),
        0px 1px 0px rgba(255, 255, 255, 0.2);
      transition: all .1s ease-in-out 0s;
    }

    .buttons::after:active {
      background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.2));
    }

    .buttons:active::before {
      content: "";
      display: block;
      position: absolute;
      top: 5%;
      left: 20%;
      width: 50%;
      height: 80%;
      background-color: rgba(255, 255, 255, 0.1);
      animation: overlay 0.1s ease-in-out 0s;
      pointer-events: none;
    }

    .buttons svg {
      width: 15px;
      height: 15px;
    }

    @keyframes overlay {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    .buttons:focus {
      outline: none;
    }

    .loader {
      display: block;
      --height-of-loader: 3px;
      --loader-color: #0071e2;
      width: 330px;
      height: var(--height-of-loader);
      border-radius: 30px;
      background-color: rgba(0, 0, 0, 0.2);
      position: relative;
      margin: 50px auto 0;
    }

    .loader::before {
      content: "";
      position: absolute;
      background: var(--loader-color);
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      border-radius: 30px;
      animation: moving 1s ease-in-out infinite;
      ;
    }

    @keyframes moving {
      50% {
        width: 100%;
      }

      100% {
        width: 0;
        right: 0;
        left: unset;
      }
    }

`;

document.head.appendChild(style);
