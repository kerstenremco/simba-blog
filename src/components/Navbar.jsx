export default function NavBar(props) {
  return (
    <>
      <div class="navbar bg-base-100 max-xl:hidden">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Remco Kersten</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">

            {props.categories.map(cat => (
              <li><a><box-icon name={cat.icon} type={cat.iconType} ></box-icon>{cat.title}</a></li>
            ))}
            <li>
              <details>
                <summary>
                  More
                </summary>
                <ul class="p-2 bg-base-100 rounded-t-none">
                  {props.categories.map(cat => (
                    <li><a><box-icon name={cat.icon} type={cat.iconType} ></box-icon>{cat.title}</a></li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div class="btm-nav xl:hidden">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span class="btm-nav-label">Home</span>
        </button>
        <button class="active">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="btm-nav-label">Warnings</span>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          <span class="btm-nav-label">Statics</span>
        </button>
      </div>
    </>


  )
}