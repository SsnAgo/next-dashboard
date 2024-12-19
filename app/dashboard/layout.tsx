import SideNav from "@/app/ui/dashboard/sidenav";
import React from "react";


// 该组件下的所有子组件都将被渲染到页面上，并根据路由进行切换
// children就是customers和invoices的page组件
export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}
