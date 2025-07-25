import "./Trabajos.css";

import trabajos from "../data/trabajos";
import { useState } from "react";
import Modal from "../Modal";

const Trabajos = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
    const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
    const [estadoModal, setEstadoModal] = useState(false);
    const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(trabajos[0]);
    
    const handleCategoria = (e) => {
        const categoria = e.target.id;
        setCategoriaSeleccionada(categoria);
        
        if(categoria === 'todos') {
            setTrabajosFiltrados(trabajos);
            return;
        }

        const nuevosTabajos = trabajos.filter((trabajo) => {
            if(trabajo.categoria === categoria) {
                return true;
            }
        });

        setTrabajosFiltrados(nuevosTabajos);
    };

    const openModal = (e, id) => {
        e.preventDefault();
        setEstadoModal(true);

        const trabajo = trabajos.find((trabajo) => trabajo.id === id);
        setTrabajoSeleccionado(trabajo);
    }

    const closeModal = () => {
        setEstadoModal(false)
    }

    return (
        <>
            <section className="trabajos" id="trabajos">
                <div className="encabezado">
                    <h3 className="titulo">Mis Trabajos</h3>
                    <p className="subtitulo">Estos son algunos de los proyectos que he realizado.</p>
                </div>
                <div className="filtros">
                    <label htmlFor="todos">
                        <input type="radio" name="categoria" id="todos" onChange={handleCategoria} checked={categoriaSeleccionada === 'todos'} />
                        <span className="opcion">Todos</span>
                    </label>
                    <label htmlFor="diseño-web">
                        <input type="radio" name="categoria" id="diseño-web" onChange={handleCategoria} checked={categoriaSeleccionada === 'diseño-web'} />
                        <span className="opcion">Diseño Web</span>
                    </label>
                    <label htmlFor="desarrollo-web">
                        <input type="radio" name="categoria" id="desarrollo-web" onChange={handleCategoria} checked={categoriaSeleccionada === 'desarrollo-web'} />
                        <span className="opcion">Desarrollo Web</span>
                    </label>
                    <label htmlFor="aplicaciones-moviles">
                        <input type="radio" name="categoria" id="aplicaciones-moviles" onChange={handleCategoria} checked={categoriaSeleccionada === 'aplicaciones-moviles'} />
                        <span className="opcion">Aplicaciones Moviles</span>
                    </label>
                    <label htmlFor="desarrollo-software">
                        <input type="radio" name="categoria" id="desarrollo-software" onChange={handleCategoria} checked={categoriaSeleccionada === 'desarrollo-software'} />
                        <span className="opcion">Desarrollo de Software</span>
                    </label>
                </div>
                <div className="grid">
                    {/* Trabajo 1 */}
                    {trabajosFiltrados.map((trabajo, index) => {
                        return (
                            <div className="trabajo" key={trabajo.id}>
                            <a href="#" className="thumb" onClick={(e) => openModal(e, trabajo.id)}>
                                <img loading="lazy" src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
                            </a>
                            <div className="info">
                                <div className="textos">
                                        <a href="#" className="nombre" onClick={(e) => openModal(e, trabajo.id)}>{trabajo.info.nombre}</a>
                                        <p className="categoria">{trabajo.info.categoria}</p>
                                </div>
                                <a href="#" className="btn-ir" onClick={(e) => openModal(e, trabajo.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                    </svg> 
                                </a>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {estadoModal && (<Modal closeModal={closeModal} trabajo={trabajoSeleccionado} /> )}

        </>
    )
};

export default Trabajos;