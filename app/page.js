import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Banner from '@/components/Home/Banner';
import Built from '@/components/Home/Built';
import Commission from '@/components/Home/Commission';
import GetInTuch from '@/components/Home/GetInTuch';
import Plans from '@/components/Home/Plans';
import Profit from '@/components/Home/Profit';
import Story from '@/components/Home/Story';
import Work from '@/components/Home/Work';
import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// Import your custom styles after Tailwind and Bootstrap
import "/public/assets/css/global.css";
import "/public/assets/css/style.css";
import "/public/assets/css/responsive.css";
import "/public/App.css";
import "/public/index.css";

// For Toastify
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <Built />
      <Work />
      <Story />
      <Plans />
      <Profit />
      <Commission />
      <GetInTuch />
      <Footer />
    </>
  );
};

export default page;