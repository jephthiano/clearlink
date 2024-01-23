import Nav from  'addons/component/nav.inc'
import Header from  'addons/component/header.inc'
import Join from  'addons/component/join.inc'
import ChooseUs from  'addons/component/choose_us.inc'
import Testimonial from  'addons/component/testimonial.inc'
import Support from 'addons/component/support.inc'
import Trial from 'addons/component/trial.inc'
import Footer from 'addons/component/footer.inc'
import Copyright from 'addons/component/copyright.inc'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Join />
      <ChooseUs />
      <Testimonial />
      <Support />
      <Trial />
      <Footer />
      <Copyright />
    </div>
  );
}


export default App;
