import TopHeaderRow from "./TopHeaderRow"
import NavigationBar from "./NavigationBar"
import AnnouncmentBar from "./AnnouncmentBar"

const Header = () => {
  return (
    <header className="py-2">
      <TopHeaderRow />
      <NavigationBar />
      <AnnouncmentBar />
    </header>
  )
}

export default Header
