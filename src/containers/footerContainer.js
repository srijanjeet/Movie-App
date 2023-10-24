import React from 'react'
import footer from '../components/footer/footer'

export default function FooterContainer() {
  return (
    <>
    <footer>
        <footer.Title> 
            Questions? Contact Us....
        </footer.Title>
        <footer.Break/>
        <footer.Row>

          <footer.Column>
            <footer.Link href= '#'>FAQ</footer.Link>
            <footer.Link href= '#'>Investor Relations</footer.Link>
            <footer.Link href= '#'>Ways To Watch</footer.Link>
            <footer.Link href= '#'>Coporate Information</footer.Link>
            <footer.Link href= '#'>Orignals</footer.Link>
          </footer.Column>

          <footer.Column>
            <footer.Link href= '#'>Help Centers</footer.Link>
            <footer.Link href= '#'>Jobs</footer.Link>
            <footer.Link href= '#'>Terms of Use</footer.Link>
            <footer.Link href= '#'>Contact Us</footer.Link>
          </footer.Column>

          <footer.Column>
            <footer.Link href= '#'>Account</footer.Link>
            <footer.Link href= '#'>Redeem Gift Cards</footer.Link>
            <footer.Link href= '#'>Privacy</footer.Link>
            <footer.Link href= '#'>Speed Test</footer.Link>
          </footer.Column>

          <footer.Column>
            <footer.Link href= '#'>Media Center</footer.Link>
            <footer.Link href= '#'>Buy Gift Cards</footer.Link>
            <footer.Link href= '#'>Cookie Prefrences</footer.Link>
            <footer.Link href= '#'>Legal Notices</footer.Link>
          </footer.Column>
        </footer.Row>
        <footer.Break/>
        <footer.Text>Nueflix</footer.Text>
    </footer>
    
    </>
  )
}
