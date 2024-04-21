import { FC, RefObject } from 'react';
import './index.css'

interface EnterpriseFormProps{
    targetRef : RefObject<HTMLDivElement>
}
const EnterpriseForm :FC<EnterpriseFormProps> = ({targetRef}) => {
    return (
        <div className='enterprise-form' ref={targetRef}>
            <div className='enterprise-form-1'>
                <div className='enterprise-form-1-1'>Enterprises</div>
                <div className='enterprise-form-1-2'></div>
                <div className='enterprise-form-1-3'></div>
                <div className='enterprise-form-1-4'>
                    <div className='enterprise-form-1-4-top'>
                        <div className='enterprise-form-1-4-top-content'>candidate screening tool</div>
                    </div>
                    <div className='enterprise-form-1-4-bottom'>
                        <div className='enterprise-form-1-4-bottom-content'>assessment tool for Product positions</div>
                    </div>
                </div>
            </div>
            <div className='enterprise-form-2'>
                <div className='enterprise-form-2-1'>
                    <div className='enterprise-form-2-1-1'>
                        <div className='enterprise-form-2-1-left'>
                            <div className='enterprise-form-2-1-left-email'>
                                <input className='enterprise-form-2-1-left-email-content' placeholder='work email*' />
                            </div>
                        </div>
                        <div className='enterprise-form-2-1-right'>
                            <div className='enterprise-form-2-1-left-phone'>
                                <input className='enterprise-form-2-1-left-phone-content' placeholder='phone*' />
                            </div>
                        </div>
                    </div>
                    <div className='enterprise-form-2-1-2'>
                        <div className='enterprise-form-2-1-2-requirements'>
                            <input className='enterprise-form-2-1-2-requirements-content' placeholder='requirements' />
                        </div>
                    </div>
                    <div className='enterprise-form-2-1-3'>
                        <div className='enterprise-form-2-1-3-button'>
                            submit
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseForm;