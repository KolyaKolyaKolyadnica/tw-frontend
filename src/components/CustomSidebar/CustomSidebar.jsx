"use client";
import { useState } from "react";
import style from "./CustomSidebar.module.css";
import sidebarMenuData from "./sidebarMenuData.json";

export default function CustomSidebar() {
  const [openMenu, setopenMenu] = useState(false);
  const [openMenuData, setopenMenuData] = useState("");

  return (
    <div className={`${style.sidebare} ${openMenu ? style.openMenu : ""}`}>
      <div
        onClick={() => {
          setopenMenu(!openMenu), setopenMenuData("");
        }}
        className=" w-full h-full"
      >
        <div className={`${style.sidebare_line} ${style.sidebare_line_1}`} />
        <div className={`${style.sidebare_line} ${style.sidebare_line_2}`} />
        <div className={`${style.sidebare_line} ${style.sidebare_line_3}`} />
      </div>

      <div
        className={`${style.sidebare_menu} ${openMenu ? style.openMenu : ""}`}
      >
        {sidebarMenuData.map((el) => {
          return (
            <div
              key={`${el.section}_items`}
              className={`${style.sidebare_menu_items} `}
            >
              <div className={style.items_}>
                BACK <samp>{el.section}</samp>
              </div>
              {el.items.map((items) => {
                return (
                  <div key={items.title}>
                    {items.title} <br />
                    {items.description}
                  </div>
                );
              })}
            </div>
          );
        })}

        {sidebarMenuData.map((el) => {
          return (
            <div key={el.section} className={`${style.sidebare_menu_section} `}>
              {el.section}
            </div>
          );
        })}
      </div>
    </div>
  );
}
