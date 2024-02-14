
export default function Proyectos() {
    return (
        <main className=" min-h-screen  p-24">
            <h1 className="text-3xl mb-3 font-bold">Proyectos</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="/img/nubesdepuntos.webp" alt="Nubes de puntos" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Nubes de Puntos</h2>
                        <p>Administrar y Visualizar nubes de puntos</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary btn-sm">Ver mas</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="/img/tickets.webp" alt="Tickets" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sistema de Tickets</h2>
                        <p>Sistema para la resolución de tickets TI</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary btn-sm">Ver mas</button>
                        </div>
                    </div>
                </div>
        
            </div>
        </main>
    )
}
