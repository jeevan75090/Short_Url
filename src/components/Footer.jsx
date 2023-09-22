import {FaFacebook, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer flex justify-around py-8 text-white bg-[#232027]">
        <div className="logo">
            <h2 className="text-2xl font-bold cursor-pointer">Shortly</h2>
        </div>

        <div className="Features">
            <h2>Features</h2>
            <div className="flex flex-col gap-1 opacity-60 text-sm py-3">
                <a href=''>Link Shortening</a>
                <a href=''>Branded Links</a>
                <a href=''>Analytics</a>
            </div>
        </div>

        <div className="Resources">
            <h3>Resources</h3>
            <div className="flex flex-col gap-1 opacity-60 text-sm py-3">
                <a href=''>Blog</a>
                <a href=''>Developers</a>
                <a href=''>Support</a>
            </div>
        </div>

        <div className="company">
            <h3>Company</h3>
            <div className="flex flex-col gap-1 opacity-60 text-sm py-3">
                <a href=''>About</a>
                <a href=''>Our Team</a>
                <a href=''>Careers</a>
                <a href=''>Contact</a>
            </div>
        </div>

        <div className="flex gap-4">
            <a href=""><FaFacebook/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><FaYoutube/></a>
            <a href=""><FaInstagram/></a>
        </div>
    </div>
  )
}

export default Footer