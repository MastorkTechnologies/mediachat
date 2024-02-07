import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='mt-8 border-t border-gray-200'>
      <MaxWidthWrapper>
      <div className='py-6 flex flex-col sm:flex-row items-center justify-between'>
          <div className='flex flex-col items-start mb-4 sm:mb-0'>
            <Link href='/' className='font-semibold mb-2'>
              <span>Chat With Media.</span>
            </Link>
            <p className='text-gray-500'>&copy; 2024  <Link href='https://mastork.com' className='font-semibold mb-2'>
              <span>Mastork Technologies Pvt. Ltd.</span>
            </Link> All rights reserved.</p>
            <p className='text-gray-500'>
              1st Floor, Keshav Tower, Village Razapur, Sector-9, Rohini, Delhi, 110085
            </p>
          </div>
          <div className='hidden sm:flex flex-col items-start space-y-2'>
            <Link
              href='https://mastork.com/contact'
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Contact Us
            </Link>
            <Link
              href='https://mastork.com/privacy-policy'
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Privacy Policy
            </Link>
            <Link
              href='/pricing'
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Pricing
            </Link>
            <Link
              href='https://mastork.com/terms-policy'
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Terms & Conditions
            </Link>
            <Link
              href='/https://mastork.com/cancellation-policy'
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Refund & Cancellation
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
