const Sectionl = () => {
    return(
        <>
        <div className="mt-[200px] w-[1440px] gap-[80px] h-[353px] flex  justify-center">
            <div className=" w-[290px] h-[353px] flex flex-col gap-5">
                <div className="flex gap-5 items-center">
                    <div className="w-[50px] h-[50px]"><img className="w-[50px] h-[50px]" src="src\assets\sectionl\Vector(7).svg" /></div>
                    <div><h1 className="text-[#000] text-[24px] font-['circular']">Travlog</h1></div>
                </div>
                <div>
                    <p className="leading-8 text-[23px] text-gray-400 font-['circular'] whitespace-break-spaces ">Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsin a piece of classical Latin literature from 45 BC.</p>
                </div>
                <div className="mt-[30px]">
                    <ul className="flex gap-7">
                        <li><img src="src\assets\sectionl\Vector(8).svg" alt="" /></li>
                        <li><img src="src\assets\sectionl\Group.svg" alt="" /></li>
                        <li><img src="src\assets\sectionl\Group 8(1).svg" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className=" w-[679px] h-[272px]">
                <table className=" w-[679px] h-[270px] border-collapse text-left text-[#000]">
                    <tr>
                        <th className="">Company</th>
                        <th>Contact</th>
                        <th>Meet Us</th>
                    </tr>
                    <tr>
                        <td className="">bed</td>
                        <td>Why Travlgo?</td>
                        <td>+00 92 1234 56789</td>
                    </tr>
                    <tr>
                        <td>Career</td>
                        <td>Partner with us</td>
                        <td>info@travelgo.com</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>FAQ's</td>
                        <td>205. R Street, New York
                            BD23200
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="text-start">Blog</td> 
                    </tr>
                </table>
            </div>
        </div>
        </>
    )

}

export default Sectionl;