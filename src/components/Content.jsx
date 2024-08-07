
import './Content.css';
import Item from './Item';
function Content() {
  let title = 'list item';
  const item = [
    {
      img: 'https://i.ytimg.com/vi/X6B6NpkMnYE/maxresdefault.jpg',
      placename: 'Jibhi India',
      distance: '332 km away',
      timing: '14-19 jul',
      rent: '6850 night',
    },
    {
      img: 'https://a0.muscache.com/pictures/miso/Hosting-48554731/original/d33bfd47-16c3-4258-a3a6-51d46952158b.jpeg',
      placename: 'pharog India',
      distance: '64km away',
      timing: '1-6 jul',
      rent: '6999 night',
    },
    {
      img: 'https://media1.thrillophilia.com/filestore/9x6dej7caqosc132iet35vvezj5r_Kullu-tour-packages-delhi-etaxigo.jpg',
      placename: 'Manali India',
      distance: '396 km away',
      timing: '25-30 jul',
      rent: '3,999 night',
    },
    {
      img: 'https://live.staticflickr.com/65535/52806111334_0986afb011_b.jpg',
      placename: 'HunderIndia',
      distance: '438 km away',
      timing: '6-11 jul',
      rent: '14,500 5 nights',
    },
   
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHsy8Iq6gIA27diaceL0afnW_2zOtXtaZAQ&s',
      placename: 'Shimla H.P.',
      distance: '62 km away',
      timing: '14-19 jul',
      rent: '5500',
    },
    {
      img: 'https://www.shoutlo.com/assets/images/merchant_images/merchant-131501-5e5f5c7d1df6a.jpg',
      placename: 'Majrian India',
      distance: '9 KM away',
      timing: '9-11 jul',
      rent: '60,345 5-nights',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2eSXKT3haiWXUsYLyWMpM8FWtD6zIpg3Zw&s',
      placename: 'Panchkula India',
      distance: '9km away',
      timing: '5-9 jul',
      rent: '6000 night',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/miso/Hosting-50375837/original/e0885f17-e35c-45ca-b046-ca00c0f04d5e.jpeg?im_w=720',
      placename: 'Aganpur chandigarh',
      distance: '26km away',
      timing: '7-12 jul',
      rent: '10,000 night',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/750fd487-a67d-4c74-835e-7ed9d58f5522.jpg?im_w=720',
      placename: 'Fagu India',
      distance: '63km away',
      timing: '8-15 jul',
      rent: '9999',
    },
    {
      img: 'https://s3.india.com/wp-content/uploads/2024/03/Feature-Image_-Dehradun-2.jpg?impolicy=Medium_Widthonly&w=700',
      placename: 'Dehradun',
      distance: '112km away',
      timing: '11-17 jul',
      rent: '15,050',
    },
    {
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/18/25/ba/1e/bir-is-a-village-located.jpg',
      placename: 'Bir H.P.',
      distance: '144km away',
      timing: '15-20 JUL',
      rent: '6000',
    },
    {
      img: 'https://www.ravenouslegs.com/uploads/4/2/3/4/42340821/3466076_orig.jpg',
      placename: 'Palampur H.P.156Km away',
      distance: '155km away',
      timing: '2-7 jul',
      rent: '10,000 night',
    },
  ]
  return (
    <div className="container">
      <div className="row">
          <Item item={item} />

      </div>
<div className="btn">
  <h3>Continue exploring farm</h3>
  <button type='button' className='show'>SHOW MORE</button>
</div>
    </div>

  )
}

export default Content;