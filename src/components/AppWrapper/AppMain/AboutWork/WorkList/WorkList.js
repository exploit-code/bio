import React from 'react';
import './WorkList.css';
import WorkItem from './WorkItem/WorkItem';
import workIcon1 from '../../../../../pictures/icon_work_1.png';
import workIcon2 from '../../../../../pictures/icon_work_2.png';
import workIcon3 from '../../../../../pictures/icon_work_3.png';

const data = [
    {
        icon: workIcon1, company: 'ООО «ИРСО»', position: 'HTML-верстальщик', isGreen: true, description: [
            'Поддержка и развитие существующих проектов компании',
            'Кроссплатформенная, валидная адаптивная верстка',
            'Оптимизация кода для повышения производительности ресурсов',
            'Поиск и исправление багов',
            'Управление контентом на сайте компании с помощью CMS Битрикс',
            'Участие в оценке и планировании задач'
        ]
    },
    {
        icon: workIcon2, company: 'ООО «Вазаро»', position: 'Контент-менеджер', description: [
            'Размещение контента на сайте компании с помощью CMS',
            'Верстка и размещение текстовой информации',
            'Контроль и поддержка актуальности информации, размещенной на сайте',
            'Подготовка информационных текстов для сайта (рерайтинг)',
            'Поиск и обработка изображений для размещения на сайте (Adobe Photoshop)',
            'Постановка задач отделу разработки для автоматизации и исправления технических ошибок сайта'
        ]
    },
    {
        icon: workIcon3, company: 'АО «Альфа-Банк»', position: 'Ведущий-специалист', description: [
            'Консультирование клиентов по всему спектру продуктов и услуг банка',
            'Операционное обслуживание физических лиц (открытие вкладов, осуществление валютных и рублевых переводов, оформление инвистиционных продуктов, работа с пластиковыми картами)',
            'Выполнение планов продаж банковских и страховых продуктов',
            'Сбор необходимых документов клиента для подачи заявки на приобретение банковского продукта'
        ]
    }
]

let WorkList = () => {
    const dataItems = data.map((item, index) => {
        return <WorkItem data={item} key={index} />
    });
    return (
        <ul className='work_list'>
            {dataItems}
        </ul>
    );
}
export default WorkList;