import React, { useState } from 'react'
import './Array.css'
import Navbar from './Navbar';


export default function arrayChart() {
    let Array = [28, 46, 29, 35, 20, 64, 44, 75, 31, 52, 71, 11, 45, 30, 37, 59, 53, 27, 54, 16, 21, 15, 62, 42, 67, 63, 78, 50, 26, 26, 9, 55]
    let [Arr, setArr] = useState(Array);
    let index = Arr.toString();
    console.log(Arr)

    const InsertionSort = (array) => {
        for (let i = 1; i < array.length; i++) {
            for (let j = i - 1; j >= 0; j--) {
                if (array[j] > array[j + 1]) {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
                else {
                    break;
                }
            }
        }
        return array;
    }


    const BubbleSort = (array) => {
        for (let i = 0; i < array.length; i++) {

            for (let j = 0; j < array.length - i; j++) {
                if (array[j] > array[j + 1]) {
                    let te = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = te;
                }
            }
        }
        return array
    }

    const ClickedBS = () => {
        let nwarray = [...Arr];
        nwarray = BubbleSort(nwarray)
        setArr(nwarray)
    }
    const ClickedIS = () => {
        let nwarray = [...Arr];
        nwarray = InsertionSort(nwarray)
        setArr(nwarray)
    }




    return (
        <>
            <button type="button" className="btn btn-secondary m-2" onClick={ClickedIS} >Insertion Sort</button>
            <button type="button" className="btn btn-secondary m-2" onClick={ClickedBS} >Bubble Sort</button>
            <div className="container">
                {
                    Arr.map((value, index) => {
                        return <div className="array-bar" key={index} style={{ height: `${value}vh` }}>
                            {value}
                        </div>
                    })
                }
            </div>
            {/* <button type="button" className="btn btn-secondary m-2" onClick={Clicked} >Bubble Sort</button> */}
        </>
    )
}
