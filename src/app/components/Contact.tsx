import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { BackgroundBeams } from './ui/background-beams';
import { Textarea } from './ui/textarea';

export function ContactForm() {
    const [state, handleSubmit] = useForm("xovajpoa");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            console.log(state);
            setSuccess(true);
        }
    },[state.succeeded])

    return (
        <div className=' mx-auto py-48 px-9 relative overflow-hidden' >
            <BackgroundBeams />
            <div id='contactme' className='max-w-[40rem]   mx-auto'>
                {success ? (
                    <div className='max-w-[40rem] border mx-auto h-[50rem] py-50 gap-9 flex flex-col justify-center items-center px-9'>
                        <p></p>
                        <h1 className='text-4xl md:text-6xl font-semibold'>Thank You!</h1>
                        <p>I have received your submission</p>
                    </div>
                ) : (
                    <span className='space-y-24'>
                    <h1 className=' text-4xl md:text-6xl font-bold text-center'>Connect with me</h1>
                    <div>
                        <form className='flex flex-col gap-9 ' onSubmit={handleSubmit}>
                            <div className='space-y-3 z-10'>
                                <Label htmlFor="firstname" className=''>Name</Label>
                                <Input id="name" placeholder="Enter Your Name" type="text" name="name" />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className='space-y-3 z-10'>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Enter Your Email" type="email" name="email" />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className='text-red-400 text-center'
                                />
                            </div>
                            <div className='space-y-3 z-10'>
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Enter Your Message" name="message" />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <button
                                className="  relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-xl py-3 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                type="submit"
                                disabled={state.submitting}
                            >
                                Submit
                                <BottomGradient />
                            </button>


                        </form>
                    </div>
                </span>
                )}
                

            </div>


        </div>

    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};