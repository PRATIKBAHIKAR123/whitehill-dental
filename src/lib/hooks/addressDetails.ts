import { Phone, Mail, MapPin } from 'lucide-react';

export const contactDetails = {
  address: "1146 Bristol Oxford Valley Rd, Levittown, PA 19057, United States",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.9578094988087!2d-74.87813912452998!3d40.16549307089306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c153d5958a70f9%3A0xf4b4e58e6a4329b5!2s1146%20Bristol%20Oxford%20Valley%20Rd%2C%20Levittown%2C%20PA%2019057%2C%20USA!5e0!3m2!1sen!2sin!4v1766493817770!5m2!1sen!2sin",
  phone: "+1 (215) 607-7200",
  email: "levittown@whitehilldentalpa.com",
};

export const contactInfo = [
  {
    icon: MapPin,
    text: contactDetails.address,
  },
  {
    icon: Phone,
    text: contactDetails.phone,
  },
  {
    icon: Mail,
    text: contactDetails.email,
  },
];
