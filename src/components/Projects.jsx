import React from 'react'
import lazy from '../images/ImagenProyectoLazy.jpg'
import blank from '../images/blankProject.png'
import superApp from '../images/superApp.png'
import horos from '../images/ProyectoHoros.jpg'

const Projects = () =>{
    const changeOpacity = ()=>{
        const nodeList1 = document.getElementsByClassName('projects__box-link2')
        const linksImg = [...nodeList1]
        linksImg.forEach((id)=>{
            id.classList.toggle('projects__box-link')
        })        
        const nodeList2 = document.getElementsByClassName('read-more')
        const linksBox = [...nodeList2]
        linksBox.forEach((id)=>{
            id.classList.toggle('projects__box')
        })     
    }
    return (
        <div className='projects__container' id='projects'>
            <h2 className='projects__title'>Proyectos personales</h2>
            <h3 className='projects__second-title'>¡Aquí encontraras mis mejores proyectos!</h3>
            <div className='projects__list'>
                <input type="checkbox" className='projects__read-more' id="projects-1" />
                <div className='projects__box'>
                    <p className='projects__box-text'>Super-App - <span className='projects__box-text-tech'>(React.JS)</span></p> 
                    <p className='projects__box-description'>Armar equipo de super-heroes</p>
                    <img src={superApp} alt="Imagen proyecto super app" className='projects__box-img'/>
                    <a className='projects__box-link' target='_blank' rel="noreferrer" href="https://emij7.github.io/super-app/">Página del proyecto</a>
                    <a className='projects__box-link' target='_blank' rel="noreferrer" href="https://github.com/emij7/super-app">Código GITHUB</a>
                </div>
                <div className='projects__box'>
                    <p className='projects__box-text'>Horóscopo</p> 
                    <p className='projects__box-description'>Descubre tus signos de horóscopo.</p>
                    <img src={horos} alt="Imagen proyecto Horóscopo" className='projects__box-img'/>
                    <a className='projects__box-link' target='_blank' rel="noreferrer" href="https://emij7.github.io/Horoscopos/">Página del proyecto</a>
                    <a className='projects__box-link' target='_blank' rel="noreferrer" href="https://github.com/emij7/Horoscopos">Código GITHUB</a>
                </div>
                <div className='projects__box'>
                    <p className='projects__box-text'>LAZY LOADING - <span className='projects__box-text-tech'>(vanilla JS)</span></p>
                    <p className='projects__box-description'>Manipulación básica del DOM</p>
                    <div>
                        <img src={lazy} alt="Imagen proyecto lazy loading" className='projects__box-img'/>
                    </div>
                    <a className='projects__box-link' target='_blank' rel="noreferrer" href="https://emij7.github.io/Manipulacion-DOM-2/">Página del proyecto</a>
                    <a className='projects__box-link' target='_blank' rel="noreferrer" href="https://github.com/emij7/Manipulacion-DOM-2">Código GITHUB</a>
                </div>
                <div className=' read-more'>
                    <p className='projects__box-description'>...</p>
                    <p className='projects__box-text'>Próximamente</p> 
                    <img src={blank} alt="Imagen en blanco. A llenar con proyecto" className='projects__box-img'/>
                    <p className='projects__box-link2' href="/#">...</p>
                    <p className='projects__box-link2' href="/#">...</p>
                </div>
                <div className=' read-more'>
                    <p className='projects__box-description'>...</p>
                    <p className='projects__box-text'>Próximamente</p> 
                    <img src={blank} alt="Imagen en blanco. A llenar con proyecto" className='projects__box-img'/>
                    <p className='projects__box-link2' href="/#">...</p>
                    <p className='projects__box-link2' href="/#">...</p>
                </div>
                <div className=' read-more'>
                    <p className='projects__box-description'>...</p>
                    <p className='projects__box-text'>Próximamente</p> 
                    <img src={blank} alt="Imagen en blanco. A llenar con proyecto" className='projects__box-img'/>
                    <p className='projects__box-link2' href="/#">...</p>
                    <p className='projects__box-link2' href="/#">...</p>
                </div>
                <label htmlFor="projects-1" className="projects__read-more--trigger" onClick={changeOpacity}></label>
            </div>
        </div>
    )
}
export default Projects;