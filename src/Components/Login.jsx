import Bac from "./Lib/img/bac.png"

function Login() {
    return (
        <>
        <main className="main">
            <div className="container mx-auto">
                <div className="flex items-center gap-48  max-xl:flex-col max-xl:flex-col">
                        <img className="h-full xl:w-18 h-12 max-xl:w-1/2" src={Bac} alt="Bac" width={720} height={799}/>

                    <div className="flex flex-col max-xl:bg-slate-900 w-full flex flex-col items-center">
                        <h1 className="text-xl pb-8 decoration-black font-sans font-bold max-xl:text-white">
                        <span className="text-sm font-sans font-normal">Welcome back</span> <br/>
                             Login to your account</h1>

                        <form className="form flex flex-col gap-10">
                            <label >
                                <span className="max-xl:text-white">Email</span><br/>
                                <input className="w-80 h-12 rounded-lg pl-4 font-serif" type="email" placeholder="Enter Your Email"/>
                            </label>

                            <label >
                                <span className="max-xl:text-white">Password</span><br/>
                                <input className="w-80 h-12 rounded-lg pl-4 font-serif" type="password" placeholder="Enter Your Password"/>
                            </label>

                            <label className="flex">
                                <input type="checkbox" className="max-xl:text-white "/> <span className="pl-4">Remember me</span>
                                <a href="none"  className="pl-14 max-xl:text-white">Forgot password?</a>
                            </label>

                            <button type="submit plus" className="bg-green-600 w-80 h-12 rounded-lg">Log in</button>
                            <button type="submit" className=" bg-black w-80 h-12 rounded-lg text-white">Or sign-in with google</button>

                        </form>

                        <div className="mt-6">
                            <a className="mt-6" href="#link">Dont have an account? Join free today</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Login