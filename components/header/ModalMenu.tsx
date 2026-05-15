import HeaderLanguages from "./HeaderLanguages"
import Nav from "./Nav"

export default function ModalMenu({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: any }) {
  return (
    <>
      {isMenuOpen && <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-90 z-20" />}

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-30 flex flex-col items-center gap-5 p-5 text-lg text-brand-white font-[600]">
          <div className="w-full flex flex-col items-center gap-2">
            <span className="w-full block drop-shadow-sm">Sections:</span>
            <Nav modal setIsMenuOpen={setIsMenuOpen} />
          </div>

          <div className="w-full flex flex-col items-center gap-2">
            <span className="w-full block drop-shadow-sm">Languages:</span>
            <HeaderLanguages modal />
          </div>
        </div>
      )}
    </>
  )
}