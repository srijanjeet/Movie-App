import React from 'react'
import faqsData from '../fixtures/faqs.json'
import Accordian from '../components/accordian/accordian'
import Opt from '../components/opt-form/opt'
export default function Faqs() {
    return (
        <>
            <Accordian>
                <Accordian.Title>
                    Frequently Asked Questions
                </Accordian.Title>
                {
                    faqsData.map((item) => {
                        //    { console.log (item.header)}

                        return <Accordian.Item key={item.id} sri={item.id}>
                            <Accordian.Header >
                                {item.header}
                            </Accordian.Header>
                            <Accordian.Body>
                                {item.body}
                            </Accordian.Body>
                        </Accordian.Item>

                    })
                }

                <Opt>
                    <Opt.Input placeholder="Email address" />
                    <Opt.Button>Try it now</Opt.Button>
                    <Opt.Text>
                        Ready to watch? Enter you email to create or restart your membership
                    </Opt.Text>
                </Opt>

            </Accordian>
        </>
    )
}
