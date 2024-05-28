import './App.css';
import CreateRectangle from './components/rectangle.jsx';
import CreateHeading from './components/heading.jsx';

function App() {
  return (
    <div id = "content">
      <CreateHeading className="heading" />
      <CreateRectangle className="rectangle" />

      <svg className="arrowdown" width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.9687 23.6766L46.3117 24.0052L46.6574 23.6794L69.6691 1.99379L91.432 2.15992L46.668 46.9239L1.2154 1.47124L22.9543 1.63719L45.9687 23.6766Z" fill="#FFC812" stroke="#FFC812"/>
      </svg>
      <svg className="arrowdown" width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.9687 23.6766L46.3117 24.0052L46.6574 23.6794L69.6691 1.99379L91.432 2.15992L46.668 46.9239L1.2154 1.47124L22.9543 1.63719L45.9687 23.6766Z" fill="#FFC812" stroke="#FFC812"/>
      </svg>

      <svg width="111" height="115" viewBox="0 0 111 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 115V13L102 115H0Z" fill="#009394"/>
      <path d="M109.793 101.5L9.5 1.20711V101.5H109.793Z" stroke="#FFC812"/>
      </svg>

      <svg width="100" height="108" viewBox="0 0 100 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 108V8L0 108H100Z" fill="#006270"/>
      <path d="M89 61V0L28 61H89Z" fill="#009394"/>
      </svg>

      <svg width="44" height="22" viewBox="0 0 44 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43.3896 21.7471H0.602578L21.9961 0.353555L43.3896 21.7471Z" stroke="#006270" stroke-width="0.5"/>
      </svg>

      <svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.38086 32.5546V1.20711L17.0546 16.8809L1.38086 32.5546Z" fill="#FFC812" stroke="#FFC812"/>
      </svg>
    </div>
  );
}

export default App;
